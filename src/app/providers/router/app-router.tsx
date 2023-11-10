import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppRoutes } from './app-routes'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(AppRoutes).map(({element, path}) => (
          <Route
            key={path }
            path={path}
            element={(
              <div className="page-container">
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
