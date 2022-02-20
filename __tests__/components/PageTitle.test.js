import { render } from '@testing-library/react'
import PageTitle from '@/components/PageTitle'

it('renders page title unchanged', () => {
  const { container } = render(<PageTitle>{'Test'}</PageTitle>)
  expect(container).toMatchSnapshot()
})
