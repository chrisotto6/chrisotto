const WorkItem = ({ company, role }) => {
  return (
    <div data-testid={`job-${company.toLowerCase()}`}>
      <h3>{company}</h3>
      {role.map((role) => (
        <div key={role.title}>
          <h4>{role.title}</h4>
          <span>{`${role.monthYearStart} - ${role.monthYearEnd}`}</span>
          <ul>
            {role.jobDescription.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default WorkItem
