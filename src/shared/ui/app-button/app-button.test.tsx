import { render, screen } from '@testing-library/react'
import { AppButton, AppButtonTheme } from 'shared/ui/app-button'

describe('App button', () => {
  test('Button text', () => {
    render(<AppButton>TEST</AppButton>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('Button class', () => {
    render(<AppButton theme={AppButtonTheme.CLEAR}>TEST</AppButton>)
    expect(screen.getByText('TEST')).toHaveClass(AppButtonTheme.CLEAR)
  })
})
