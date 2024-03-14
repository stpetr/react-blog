import { Story } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import ThemeProvider from 'app/providers/theme-provider/theme-provider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
