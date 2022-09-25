const SchoolItem = ({ schoolName, degree, gpa, awards }) => {
  return (
    <div>
      <h3>{schoolName}</h3>
      <h4>{degree}</h4>
      <h5>{`${gpa} - ${awards}`}</h5>
    </div>
  )
}

export default SchoolItem
