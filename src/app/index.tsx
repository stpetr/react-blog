import { lazy, Suspense } from 'react'

import { Link, Route, Routes } from 'react-router-dom'

import cn from 'shared/helpers/class-names'

import { useTheme } from 'app/providers/theme-provider'

import './styles/index.scss';

const MainPage = lazy(() => import('pages/main-page'))
const AboutPage = lazy(() => import('pages/about-page'))

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', theme)}>
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
