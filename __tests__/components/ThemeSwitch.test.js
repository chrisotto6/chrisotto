import { render, fireEvent } from '@testing-library/react'
import ThemeSwitch from '@/components/ThemeSwitch'

it('renders ThemeSwitch unchanged', () => {
  const { container } = render(<ThemeSwitch />)
  expect(container).toMatchSnapshot()
})

it('handles click of button correctly', () => {
  const { getByTestId, container } = render(<ThemeSwitch />)
  fireEvent.click(getByTestId('theme-button'))
})
