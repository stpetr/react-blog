import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

import { AppRouteKeys, AppRoutePaths } from 'shared/config/router'

const MainPage = lazy(() => import('pages/main-page'))
const AboutPage = lazy(() => import('pages/about-page'))

export const AppRoutes: Record<AppRouteKeys, RouteProps> = {
  [AppRouteKeys.MAIN]: {
    path: AppRoutePaths.main,
    element: <MainPage />,
  },
  [AppRouteKeys.ABOUT]: {
    path: AppRoutePaths.about,
    element: <AboutPage />,
  },
}
