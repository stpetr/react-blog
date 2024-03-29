import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { AppButton, AppButtonTheme } from './index'

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
  },
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.CLEAR
  },
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.OUTLINE
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.OUTLINE
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
}
