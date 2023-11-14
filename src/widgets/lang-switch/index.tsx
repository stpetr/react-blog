import { useTranslation } from 'react-i18next'

import { AppButton, AppButtonTheme } from 'shared/ui/app-button'

export const LangSwitch = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <AppButton
      theme={AppButtonTheme.CLEAR}
      onClick={handleLanguageChange}
    >
      {t('CURRENT_LANGUAGE')}
    </AppButton>
  )
}
