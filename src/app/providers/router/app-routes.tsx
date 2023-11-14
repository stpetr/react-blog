import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

import { AppRouteKeys, AppRoutePaths } from 'shared/config/router'

import { NotFoundPage } from 'pages/not-found-page'

const MainPage = lazy(async () => await import('pages/main-page'))
const AboutPage = lazy(async () => await import('pages/about-page'))

export const AppRoutes: Record<AppRouteKeys, RouteProps> = {
  [AppRouteKeys.MAIN]: {
    path: AppRoutePaths.main,
    element: <MainPage />,
  },
  [AppRouteKeys.ABOUT]: {
    path: AppRoutePaths.about,
    element: <AboutPage />,
  },
  [AppRouteKeys.PAGE_NOT_FOUND]: {
    path: AppRoutePaths.pageNotFound,
    element: <NotFoundPage />
  }
}
