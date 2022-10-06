import { render } from '@testing-library/react'
import SchoolItem from '@/components/SchoolItem'

it('renders SchoolItem correctly', () => {
  const school = {
    schoolName: 'Lakeland University',
    degree: 'Bachelors of Science - Computer Science',
    gpa: '3.9',
    awards: 'Summa Cum Lade',
  }
  const { container } = render(
    <SchoolItem
      school={school.schoolName}
      degree={school.degree}
      gpa={school.gpa}
      awards={school.awards}
    />
  )
  expect(container).toMatchSnapshot()
})
