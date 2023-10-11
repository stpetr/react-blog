import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'
import ThemeProvider from './theme/theme-provider'

const appRoot = createRoot(document.getElementById('root'))

appRoot.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
