import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { AppRoutePaths } from 'shared/config/router'
import cn from 'shared/helpers/class-names'

import { AppButton, AppButtonSize, AppButtonTheme } from 'shared/ui/app-button'
import { AppLink, AppLinkTheme } from 'shared/ui/app-link'

import { ThemeSwitch } from 'widgets/theme-switch'
import { LangSwitch } from 'widgets/lang-switch'

import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

import styles from './sidebar.module.scss'

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { t } = useTranslation('sidebar')

  const handleCollapseToggle = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed })} data-testid="sidebar">
      <nav className={styles.nav}>
        <div>
          <AppLink
            className={styles.navLink}
            to={AppRoutePaths.main}
            theme={AppLinkTheme.SECONDARY}
          >
            <MainIcon className={styles.navLinkIcon} />
            <span className={styles.navLinkText}>{t('MAIN')}</span>
          </AppLink>
        </div>
        <AppLink
          className={styles.navLink}
          to={AppRoutePaths.about}
        >
          <AboutIcon className={styles.navLinkIcon} />
          <span className={styles.navLinkText}>{t('ABOUT')}</span>
        </AppLink>
      </nav>
      <AppButton
        className={styles.collapseBtn}
        theme={AppButtonTheme.BACKGROUND_INVERSE}
        square={true}
        size={AppButtonSize.L}
        data-testid="sidebar-toggle"
        onClick={handleCollapseToggle}
      >
        {isCollapsed ? '>' : '<'}
      </AppButton>
      <div className={styles.switches}>
        <ThemeSwitch />
        <LangSwitch short={isCollapsed} />
      </div>
    </div>
  )
}
