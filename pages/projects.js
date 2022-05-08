import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My open source side projects.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap place-content-center gap-16">
            {projectsData.map((d) => (
              <ProjectCard
                key={d}
                title={d.title}
                description={d.description}
                img={d.img}
                tech={d.tech}
                githubUrl={d.githuburl}
                projectUrl={d.projecturl}
                dataTestid={`project-card`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
