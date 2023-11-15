import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'widgets/page-loader'

import { AppRoutes } from './app-routes'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(AppRoutes).map(({ element, path }) => (
          <Route
            key={path }
            path={path}
            element={(
              <Suspense fallback={<PageLoader />}>
                <div className="page-container">
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
