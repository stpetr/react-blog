export enum AppRouteKeys {
  MAIN = 'main',
  ABOUT = 'about',
}

export const AppRoutePaths: Record<AppRouteKeys, string> = {
  [AppRouteKeys.MAIN]: '/',
  [AppRouteKeys.ABOUT]: '/about',
}
