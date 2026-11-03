import fs from 'node:fs/promises'
import chalk from 'chalk'
import express, { type Request, type Response } from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { createServer as createViteServer, type EnvironmentModuleNode } from 'vite'
import { ROUTES } from './shared/routes/routes.ts'
import { register, login, updateUser, deleteUser } from './server/controllers/index.ts'
import { mapUser } from './server/helpers/helpers/mapUser.ts'
import { token } from './server/helpers/index.ts'
import { User } from './server/models/User.ts'
import { authenticated } from './server/middlewares/authenticated.ts'

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

const getUser = async (value: string) => {
  try {
    const tokenData = token.verify(value) as { id: string }

    return await User.findOne({ _id: tokenData.id })
  } catch {
    return null
  }
}

const renderApp = (status: number) => async (req: Request, res: Response) => {
  const url = req.originalUrl
  const template = await vite.transformIndexHtml(url, await fs.readFile('./index.html', 'utf-8'))
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const user = await getUser(req.cookies.token)
  const { html: appHtml, state } = render(url, user ? mapUser(user) : null)
  const stateScript = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}</script>`
  const styles = await collectStyles('/src/entry-server.tsx')
  const html = template.replace('</head>', `${styles}${stateScript}</head>`).replace('<!--app-html-->', appHtml)
  res.status(status).set({ 'Content-Type': 'text/html' }).send(html)
}

app.use(express.json())
app.use(cookieParser())

app.post('/api/register', async (req, res) => {
  try {
    const {user, accessToken} = await register(req.body.name, req.body.email, req.body.password)

    res.cookie('token', accessToken, { httpOnly: true }).send({ error: null, user: mapUser(user) })
  } catch (e) {
    res.send({ error: (e as Error).message || 'Unknown error' })
  }
})

app.post('/api/login', async (req, res) => {
  try {
    const { user, token } = await login(req.body.email, req.body.password)

    res.cookie('token', token, { httpOnly: true }).send({ error: null, user: mapUser(user) })
  } catch (e) {
    res.send({ error: (e as Error).message || 'Unknown error' })
  }
})

app.post('/api/logout', async (req, res) => {
    res.cookie('token', '', { httpOnly: true }).send({})
})

app.patch('/api/user', authenticated, async (req, res) => {
  try {
    const newUser = await updateUser(res.locals.user.id, {
      name: req.body.name,
      settings: req.body.settings,
    })

    res.send({ error: null, user: mapUser(newUser!) })
  } catch (e) {
    res.send({ error: (e as Error).message || 'Unknown error' })
  }
})

app.delete('/api/user', authenticated, async (req, res) => {
  try {
    await deleteUser(res.locals.user.id)

    res.clearCookie('token').send({ error: null })
  } catch (e) {
    res.send({ error: (e as Error).message || 'Unknown error' })
  }
})

app.get(Object.values(ROUTES), renderApp(200))
app.use('*all', renderApp(404))

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  app.listen(PORT, () => console.log(chalk.green(`Listening on port ${PORT}`)))
})