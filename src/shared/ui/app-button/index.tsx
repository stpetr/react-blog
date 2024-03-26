import { ButtonHTMLAttributes, FC } from 'react'

import cn from 'shared/helpers/class-names'

import styles from './app-button.module.scss'

export enum AppButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  CLEAR_INVERSE = 'clear-inverse',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERSE = 'background-inverse',
}

export enum AppButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: AppButtonTheme
  square?: boolean
  size?: AppButtonSize
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    theme = AppButtonTheme.PRIMARY,
    square,
    size = AppButtonSize.M,
    children,
    ...restProps
  } = props

  const classNames: Record<string, boolean> = {
    [styles[theme]]: !!theme,
    [styles.square]: !!square,
    [styles[size]]: true,
  }

  return (
    <button
      type="button"
      className={cn(styles.appButton, classNames, className)}
      {...restProps}
    >
      {children}
    </button>
  )
}
