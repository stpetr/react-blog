export enum AppRouteKeys {
  MAIN = 'main',
  ABOUT = 'about',
  PAGE_NOT_FOUND = 'pageNotFound'
}

export const AppRoutePaths: Record<AppRouteKeys, string> = {
  [AppRouteKeys.MAIN]: '/',
  [AppRouteKeys.ABOUT]: '/about',
  [AppRouteKeys.PAGE_NOT_FOUND]: '*',
}
