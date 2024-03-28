import { useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { AppButton, AppButtonTheme } from 'shared/ui/app-button'
import { Modal } from 'shared/ui/modal'

import styles from './navbar.module.scss'

export const Navbar = () => {
  const { t } = useTranslation('navbar')

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleAuthModalToggle = useCallback(() => {
    setIsAuthModalOpen(prev => !prev)
  }, [])

  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <AppButton
          theme={AppButtonTheme.CLEAR_INVERSE}
          onClick={handleAuthModalToggle}>
          {t('LOGIN')}
        </AppButton>
      </nav>
      <Modal isOpen={isAuthModalOpen} onClose={handleAuthModalToggle}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque commodi cupiditate deserunt dolore eaque eligendi saepe sunt, velit voluptatibus!
      </Modal>
    </div>
  )
}
