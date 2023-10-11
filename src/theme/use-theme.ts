import { LS_THEME_KEY, Theme, ThemeContext } from './theme-context'
import { useContext } from 'react'

export type UseThemeResult = {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
