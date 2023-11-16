import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'app'
import { ErrorBoundary } from 'app/providers/error-boundary'
import { ThemeProvider } from 'app/providers/theme-provider'

import { PageError } from 'widgets/page-error'

import 'shared/config/i18n'

const appRoot = createRoot(document.getElementById('root') as HTMLElement)

appRoot.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
