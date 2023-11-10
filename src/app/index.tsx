import { Link } from 'react-router-dom'

import cn from 'shared/helpers/class-names'

import { useTheme } from 'app/providers/theme-provider'
import { AppRouter } from 'app/providers/router'

import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
