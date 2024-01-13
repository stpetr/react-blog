import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './index'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  // parameters: {
  //   layout: 'centered',
  // },
  argTypes: {

  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
}
