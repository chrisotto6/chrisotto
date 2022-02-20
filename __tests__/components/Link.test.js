import { render } from '@testing-library/react'
import CustomLink from '@/components/Link'

it('renders slash links unchanged', () => {
  const { container } = render(<CustomLink href="/test">{'Test'}</CustomLink>)
  expect(container).toMatchSnapshot()
})

it('renders anchor links unchanged', () => {
  const { container } = render(<CustomLink href="#test">{'Test'}</CustomLink>)
  expect(container).toMatchSnapshot()
})

it('renders real links unchanged', () => {
  const { container } = render(<CustomLink href="https://www.google.com">{'Test'}</CustomLink>)
  expect(container).toMatchSnapshot()
})
