import { fireEvent, screen } from '@testing-library/react'

import { Sidebar } from 'widgets/sidebar/index'
import { renderComponent } from 'shared/helpers/tests/render-component'

describe('Navbar', () => {
  test('Test render', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    renderComponent(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
