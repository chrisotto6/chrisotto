import { render } from '@testing-library/react'
import BlogItem from '@/components/BlogItem'

it('renders blogItem correctly', () => {
  const { container } = render(
    <BlogItem
      slug="slug"
      date="2021-02-19"
      title="test"
      summary="blah blah blah"
      tags={['test', 'another']}
      image="/test"
      readingTime={{ text: '2 min read', minutes: 1.61, time: 96600, words: 322 }}
    />
  )
  expect(container).toMatchSnapshot()
})
