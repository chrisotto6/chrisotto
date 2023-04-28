import schoolData from '@/data/schoolData'
import volunteerData from '@/data/volunteerData'
import workData from '@/data/workData'
import SchoolItem from '@/components/SchoolItem'
import VolunteerItem from '@/components/VolunteerItem'
import WorkItem from '@/components/WorkItem'

const Resume = () => {
  return (
    // Button Nav -> Anchors
    // Skills Section
    <article>
      <h2>Experience</h2>
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
      <h2>Volunteering</h2>
      {volunteerData.map((vol) => [
        <VolunteerItem
          key={vol.company}
          company={vol.company}
          title={vol.title}
          summary={vol.summary}
          yearStart={vol.yearStart}
          yearEnd={vol.yearEnd}
        />,
      ])}
    </article>
  )
}

export default Resume
