import { render } from '@testing-library/react'
import Card from '@/components/Card'

it('renders card with url unchanged', () => {
  const { container } = render(
    <Card title="test" description="test" imgSrc="/test" href="https://www.google.com" />
  )
  expect(container).toMatchSnapshot()
})

it('renders card without url unchanged', () => {
  const { container } = render(<Card title="test" description="test" imgSrc="/test" />)
  expect(container).toMatchSnapshot()
})
