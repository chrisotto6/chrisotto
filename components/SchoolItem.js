import kebabCase from '@/lib/utils/kebabCase'

const SchoolItem = ({ schoolName, degree, gpa, awards }) => {
  return (
    <div data-testid={`school-${kebabCase(schoolName)}`}>
      <h3>{schoolName}</h3>
      <h4>{degree}</h4>
      <h5>{`${gpa} - ${awards}`}</h5>
    </div>
  )
}

export default SchoolItem
