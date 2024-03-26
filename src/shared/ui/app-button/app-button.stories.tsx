import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { AppButton, AppButtonSize, AppButtonTheme } from './index'

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

export const ClearInverse: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.CLEAR_INVERSE
  },
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.OUTLINE
  },
}

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.L,
  },
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.XL,
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

export const Background: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.BACKGROUND
  },
}

export const BackgroundInverse: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.BACKGROUND_INVERSE
  },
}

export const Square: Story = {
  args: {
    children: '>',
    theme: AppButtonTheme.BACKGROUND_INVERSE,
    square: true,
    size: AppButtonSize.M,
  },
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: AppButtonTheme.BACKGROUND_INVERSE,
    square: true,
    size: AppButtonSize.L,
  },
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: AppButtonTheme.BACKGROUND_INVERSE,
    square: true,
    size: AppButtonSize.XL,
  },
}
