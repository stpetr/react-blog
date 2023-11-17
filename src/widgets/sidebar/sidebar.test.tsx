import { fireEvent, screen } from '@testing-library/react'

import { Sidebar } from 'widgets/sidebar/index'
import { renderWithTranslation } from 'shared/helpers/tests/render-with-translation'

describe('Navbar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
