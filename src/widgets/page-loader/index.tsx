import { FC } from 'react'

import cn from 'shared/helpers/class-names'

import { AppLoader } from 'shared/ui/app-loader'

import styles from './page-loader.module.scss'

type PageLoaderProps = {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.pageLoader, className)}>
      <AppLoader className={'loader'} />
    </div>
  )
}
