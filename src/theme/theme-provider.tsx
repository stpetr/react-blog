import { LS_THEME_KEY, Theme, ThemeContext } from './theme-context'
import { FC, ReactNode, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || 'light'

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

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
