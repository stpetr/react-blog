import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import cn from 'shared/helpers/class-names'

import styles from './page-error.module.scss'
import { AppButton } from 'shared/ui/app-button'

type PageErrorProps = {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const handlePageReload = () => {
    window.location.reload()
  }

  return (
    <div className={cn(styles.pageError, className)}>
      <p>{t('SOMETHING_WENT_WRONG')}</p>
      <AppButton onClick={handlePageReload}>{t('REFRESH_PAGE')}</AppButton>
    </div>
  )
}
