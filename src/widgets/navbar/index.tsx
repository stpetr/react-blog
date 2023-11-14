import { AppLink, AppLinkTheme } from 'shared/ui/app-link'

import styles from './navbar.module.scss'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const { t } = useTranslation('navbar')

  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>{t('MAIN')}</AppLink>
        <AppLink to={'/about'}>{t('ABOUT')}</AppLink>
      </nav>
    </div>
  )
}
