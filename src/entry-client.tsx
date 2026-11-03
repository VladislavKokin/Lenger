import { hydrateRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import { createStore, type RootState } from './store/store'

declare global {
  interface Window {
    __PRELOADED_STATE__?: Partial<RootState>
  }
}

const store = createStore(window.__PRELOADED_STATE__)

hydrateRoot(
  document.getElementById('root')!,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
,
)
