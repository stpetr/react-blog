import { lazy, Suspense } from 'react'

import { Link, Route, Routes } from 'react-router-dom'

import './index.scss'

const MainPage = lazy(() => import('./pages/main-page'))
const AboutPage = lazy(() => import('./pages/about-page'))

export const App = () => {
  return (
    <div className="app">
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
