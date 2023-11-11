import { useTranslation } from 'react-i18next'

export const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>{t('TITLE')}</div>
  )
}

export default MainPage
