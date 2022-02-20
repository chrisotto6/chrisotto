import { render } from '@testing-library/react'
import SectionContainer from '@/components/SectionContainer'

it('renders SectionContainer unchanged', () => {
  const { container } = render(<SectionContainer>{'test'}</SectionContainer>)
  expect(container).toMatchSnapshot()
})
