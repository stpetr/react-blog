import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

import i18nTestConfig from 'shared/config/i18n/test-config'

export type RenderComponentOptions = {
  route?: string
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
  const {
    route = '/',
  } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTestConfig}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  )
}
