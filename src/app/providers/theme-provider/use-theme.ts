import { useContext } from 'react'

import { LS_THEME_KEY, Theme, ThemeContext } from './theme-context'

export type UseThemeResult = {
  theme?: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    if (typeof setTheme === 'function') {
      setTheme(newTheme)
    }
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
