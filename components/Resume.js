import workData from '@/data/workData'
import WorkItem from '@/components/WorkItem'
import schoolData from '@/data/schoolData'
import SchoolItem from '@/components/SchoolItem'

const Resume = () => {
  return (
    <article>
      <h2>Work Summary</h2>
      {workData.map((job) => (
        <WorkItem key={job} company={job.company} role={job.role} />
      ))}
      <h2>Education</h2>
      {schoolData.map((school) => (
        <SchoolItem
          key={school.schoolName}
          degree={school.degree}
          gpa={school.gpa}
          awards={school.awards}
        />
      ))}
    </article>
  )
}

export default Resume
