import { Link } from 'react-router-dom'

import cn from 'shared/helpers/class-names'

import { useTheme } from 'app/providers/theme-provider'
import { AppRouter } from 'app/providers/router'

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <AppRouter />
    </div>
  )
}
