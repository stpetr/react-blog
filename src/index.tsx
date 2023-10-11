import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'

const appRoot = createRoot(document.getElementById('root'))

appRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
