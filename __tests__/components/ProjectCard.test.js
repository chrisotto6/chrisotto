import { render } from '@testing-library/react'
import Card from '@/components/ProjectCard'

it('renders card with url unchanged', () => {
  const { container } = render(
    <Card
      title="test"
      description="test"
      img="/test"
      githubUrl="https://www.google.com"
      projectUrl="https://www.google.com"
      tech={['node', 'react']}
    />
  )
  expect(container).toMatchSnapshot()
})
