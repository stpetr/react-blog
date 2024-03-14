import { FC, ReactNode, useMemo, useState } from 'react'

import { LS_THEME_KEY, Theme, ThemeContext } from './theme-context'

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme ?? Theme.LIGHT

type ThemeProviderProps = {
  children: ReactNode
  initTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initTheme }) => {
  const [theme, setTheme] = useState<Theme>(initTheme ?? defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
