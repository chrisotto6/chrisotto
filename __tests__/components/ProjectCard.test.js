import { render } from '@testing-library/react'
import ProjectCard from '@/components/ProjectCard'

it('renders ProjectCard correctly', () => {
  const { container } = render(
    <ProjectCard
      title="test"
      description="test"
      img="/test"
      tech={['node', 'graphql']}
      githubUrl="www.github.com"
      projectUrl="www.google.com"
    />
  )
  expect(container).toMatchSnapshot()
})
