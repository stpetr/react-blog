import React from 'react'

import { Theme, useTheme } from 'app/providers/theme-provider'

import cn from 'shared/helpers/class-names'

import { AppButton, AppButtonTheme } from 'shared/ui/app-button'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

import styles from './theme-switch.module.scss'

type ThemeSwitchProps = {
  className?: string
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <AppButton
      className={cn(styles.themeSwitch, className)}
      theme={AppButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  )
}
