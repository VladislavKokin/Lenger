import { MainPage } from './pages/main-page/main-page'
import { AnimatedBackground } from '../shared/ui/AnimatedBackground/AnimatedBackground'
import { Routes, Route } from 'react-router'

export const App = () => (
  <>
    <AnimatedBackground />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<h1>Вход</h1>} />
      <Route path="*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  </>
)
