import { useTranslation } from 'react-i18next'

import cn from 'shared/helpers/class-names'

import { AppButton, AppButtonTheme } from 'shared/ui/app-button'

import styles from './lang-switch.module.scss'

export const LangSwitch = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <AppButton
      className={cn(styles.langSwitch)}
      theme={AppButtonTheme.CLEAR}
      onClick={handleLanguageChange}
    >
      {t('CURRENT_LANGUAGE')}
    </AppButton>
  )
}
