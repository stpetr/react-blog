import { ButtonHTMLAttributes, FC } from 'react'

import cn from 'shared/helpers/class-names'

import styles from './app-button.module.scss'

export enum AppButtonTheme {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: AppButtonTheme
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    theme = AppButtonTheme.CLEAR,
    children,
    ...restProps
  } = props

  return (
    <button className={cn(styles.appButton, styles[theme], className)} {...restProps}>{children}</button>
  )
}
