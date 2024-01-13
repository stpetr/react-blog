import { ButtonHTMLAttributes, FC } from 'react'

import cn from 'shared/helpers/class-names'

import styles from './app-button.module.scss'

export enum AppButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: AppButtonTheme
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    ...restProps
  } = props

  const themeClassName = theme ? styles[theme] : ''

  return (
    <button className={cn(styles.appButton, themeClassName, className)} {...restProps}>{children}</button>
  )
}
