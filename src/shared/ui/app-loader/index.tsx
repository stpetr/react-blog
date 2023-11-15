import { FC } from 'react'

import cn from 'shared/helpers/class-names'

import './app-loader.scss'

type AppLoaderProps = {
  className?: string
}

export const AppLoader: FC<AppLoaderProps> = ({ className }) => {
  return (
    <div className={cn('lds-ellipsis', className)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
