import { Link } from 'react-router-dom'

import cn from 'shared/helpers/class-names'

import { useTheme } from 'app/providers/theme-provider'
import { AppRouter } from 'app/providers/router'

import { Navbar } from 'widgets/navbar'

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <AppRouter />
    </div>
  )
}
