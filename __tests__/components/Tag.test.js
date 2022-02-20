import { render, fireEvent } from '@testing-library/react'
import Tag from '@/components/Tag'

it('renders Tag unchanged', () => {
  const { container } = render(<Tag text="test" />)
  expect(container).toMatchSnapshot()
})
