import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { AppLoader } from './index'

const meta = {
  title: 'shared/AppLoader',
  component: AppLoader,
} satisfies Meta<typeof AppLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
}
