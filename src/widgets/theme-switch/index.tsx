import React from 'react'

import { Theme, useTheme } from 'app/providers/theme-provider'

import { AppButton, AppButtonTheme } from 'shared/ui/app-button'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

type ThemeSwitchProps = {
  className?: string
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <AppButton
      className={className}
      theme={AppButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </AppButton>
  )
}
