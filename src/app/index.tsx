import { Suspense } from 'react'

import cn from 'shared/helpers/class-names'

import { useTheme } from 'app/providers/theme-provider'
import { AppRouter } from 'app/providers/router'

import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      <Suspense fallback="Loading...">
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
