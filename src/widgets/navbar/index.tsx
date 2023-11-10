import { AppLink, AppLinkTheme } from 'shared/ui/app-link'
import { ThemeSwitch } from 'widgets/theme-switch'

import styles from './navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ThemeSwitch />
      <nav className={styles.nav}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </nav>
    </div>
  )
}
