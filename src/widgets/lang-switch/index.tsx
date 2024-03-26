import { useTranslation } from 'react-i18next'

import { AppButton, AppButtonTheme } from 'shared/ui/app-button'

type LangSwitchProps = {
  className?: string
  short?: boolean
}

export const LangSwitch = ({ className, short }: LangSwitchProps) => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <AppButton
      theme={AppButtonTheme.CLEAR}
      onClick={handleLanguageChange}
    >
      {t(short ? 'CURRENT_LANGUAGE_SHORT' : 'CURRENT_LANGUAGE')}
    </AppButton>
  )
}
