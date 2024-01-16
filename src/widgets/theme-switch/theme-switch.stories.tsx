import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

import { ThemeSwitch } from './index'

const meta = {
  title: 'widgets/ThemeSwitch',
  component: ThemeSwitch,
} satisfies Meta<typeof ThemeSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
}
