import { render } from '@testing-library/react'
import VolunteerItem from '@/components/VolunteerItem'

it('renders VolunteerItem correctly', () => {
  const vol = {
    company: 'Microsoft Teals',
    title: 'Volunteer Teacher',
    summary: 'test',
    yearStart: '2020',
    yearEnd: '2020',
  }
  const { container } = render(
    <VolunteerItem
      company={vol.company}
      title={vol.title}
      summary={vol.summary}
      yearStart={vol.yearStart}
      yearEnd={vol.yearEnd}
    />
  )
  expect(container).toMatchSnapshot()
})
