import kebabCase from '@/lib/utils/kebabCase'

const VolunteerItem = ({ company, title, summary, yearStart, yearEnd }) => {
  return (
    <div data-testid={`vol-${kebabCase(company)}`}>
      <h3>{company}</h3>
      <h4>{title}</h4>
      <h5>{`${yearStart} - ${yearEnd}`}</h5>
      <p>{summary}</p>
    </div>
  )
}

export default VolunteerItem
