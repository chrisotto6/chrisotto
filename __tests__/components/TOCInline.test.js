import { render } from '@testing-library/react'
import TOCInline from '@/components/TOCInline'

it('renders TOCInline unchanged', () => {
  const { container } = render(
    <TOCInline
      toc={[
        {
          depth: 2,
          url: '#overview',
          value: 'Overview',
        },
      ]}
      exclude="Overview"
      toHeading={2}
    />
  )
  expect(container).toMatchSnapshot()
})

it('renders TOCInline with exclude array unchanged', () => {
  const { container } = render(
    <TOCInline
      toc={[
        {
          depth: 2,
          url: '#overview',
          value: 'Overview',
        },
        {
          depth: 2,
          url: '#theme-colors',
          value: 'Theme colors',
        },
      ]}
      exclude={[]}
      toHeading={2}
    />
  )
  expect(container).toMatchSnapshot()
})

it('renders TOCInline with asDisclosure', () => {
  const { container } = render(
    <TOCInline
      toc={[
        {
          depth: 2,
          url: '#overview',
          value: 'Overview',
        },
      ]}
      toHeading={2}
      asDisclosure={true}
    />
  )
  expect(container).toMatchSnapshot()
})
