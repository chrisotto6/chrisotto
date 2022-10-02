import { render } from '@testing-library/react'
import WorkItem from '@/components/WorkItem'

it('renders WorkItem correctly', () => {
  const job = {
    company: 'Test LLC',
    role: [
      {
        title: 'Senior Coder',
        monthYearStart: 'Aug 2022',
        monthYearEnd: 'Current',
        jobDescription: ['I did this', 'And this', 'And then lastly this'],
      },
    ],
  }
  const { container } = render(<WorkItem company={job.company} role={job.role} />)
  expect(container).toMatchSnapshot()
})
