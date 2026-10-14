import { MainPage } from './pages/main-page/main-page'
import { Home, History, Accounts, Categories } from './pages/main-page/components/dashboard/components'
import { AnimatedBackground } from '../shared/ui/AnimatedBackground/AnimatedBackground'
import { ROUTES } from '../shared/routes/routes'
import { Routes, Route } from 'react-router'

export const App = () => (
  <>
    <AnimatedBackground />
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.HISTORY} element={<History />} />
        <Route path={ROUTES.ACCOUNTS} element={<Accounts />} />
        <Route path={ROUTES.CATEGORIES} element={<Categories />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<h1>Вход</h1>} />
      <Route path="*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  </>
)
