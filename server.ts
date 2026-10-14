import fs from 'node:fs/promises'
import chalk from 'chalk'
import express, { type Request, type Response } from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { createServer as createViteServer, type EnvironmentModuleNode } from 'vite'
import { ROUTES } from './shared/routes/routes.ts'

import { register } from './server/controllers/user.ts'
import { mapUser } from './helpers/mapUser.ts'

process.loadEnvFile()

const app = express()
const PORT = 5173

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
})
app.use(vite.middlewares)

const collectStyles = async (entry: string) => {
  const seen = new Set<EnvironmentModuleNode>()
  const links: string[] = []

  const walk = (mod?: EnvironmentModuleNode) => {
    if (!mod || seen.has(mod)) return
    seen.add(mod)
    if (mod.url.endsWith('.css')) links.push(`<link rel="stylesheet" href="${mod.url}" />`)
    mod.importedModules.forEach(walk)
  }

  walk(await vite.environments.ssr.moduleGraph.getModuleByUrl(entry))
  return links.join('')
}

const renderApp = (status: number) => async (req: Request, res: Response) => {
  const url = req.originalUrl
  const template = await vite.transformIndexHtml(url, await fs.readFile('./index.html', 'utf-8'))
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const appHtml = render(url)
  const styles = await collectStyles('/src/entry-server.tsx')
  const html = template.replace('</head>', `${styles}</head>`).replace('<!--app-html-->', appHtml)
  res.status(status).set({ 'Content-Type': 'text/html' }).send(html)
}

app.use(express.json())
app.use(cookieParser())

app.post('/api/register', async (req, res) => {
  try {
    const user = await register(req.body.name, req.body.email, req.body.password)

    res.send({ error: null, user: mapUser(user) })
  } catch (e) {
    res.send({ error: (e as Error).message || 'Unknown error' })
  }
})

app.get(Object.values(ROUTES), renderApp(200))
app.use('*all', renderApp(404))

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  app.listen(PORT, () => console.log(chalk.green(`Listening on port ${PORT}`)))
})