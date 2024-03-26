import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import cn from 'shared/helpers/class-names'

import styles from './app-link.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...restProps
  } = props

  return (
    <Link to={to} className={cn(styles.appLink, styles[theme], className)} {...restProps}>{children}</Link>
  )
}
