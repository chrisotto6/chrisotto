import { render, fireEvent } from '@testing-library/react'
import MobileNav from '@/components/MobileNav'

it('renders mobile nav unchanged', () => {
  const { container } = render(<MobileNav />)
  expect(container).toMatchSnapshot()
})

it('button handles click correctly', () => {
  const { getByTestId } = render(<MobileNav />)
  fireEvent.click(getByTestId('mobile-nav-button'))
  expect(document.body.style.overflow).toBe('hidden')
  fireEvent.click(getByTestId('mobile-nav-button'))
  expect(document.body.style.overflow).toBe('auto')
})
