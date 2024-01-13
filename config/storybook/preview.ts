import type { Preview } from '@storybook/react'

import { StyleDecorator } from 'shared/config/storybook/style-decorator'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { Theme } from 'app/providers/theme-provider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
  ]
}

export default preview
