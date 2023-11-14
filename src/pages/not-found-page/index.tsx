import cn from 'shared/helpers/class-names'

import styles from './not-found-page.module.scss'

import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <div className={cn(styles.notFoundPage)}>{t('PAGE_NOT_FOUND')}</div>
  )
}
