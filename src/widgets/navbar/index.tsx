import { AppLink, AppLinkTheme } from 'shared/ui/app-link'

import styles from './navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </nav>
    </div>
  )
}
