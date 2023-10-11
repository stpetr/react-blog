import { lazy, Suspense } from 'react'

import { Link, Route, Routes } from 'react-router-dom'

import { useTheme } from './theme/use-theme'

import './styles/index.scss';

const MainPage = lazy(() => import('./pages/main-page'))
const AboutPage = lazy(() => import('./pages/about-page'))

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
