import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { App } from './App'
import { createStore } from './store/store'
import type { AuthUser } from '../shared/api'

export function render(url: string, user: AuthUser | null) {
  const store = createStore({ auth: { user } })

  const html = renderToString(
    <StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </StrictMode>,
  )

  return { html, state: store.getState() }
}
