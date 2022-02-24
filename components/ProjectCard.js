import Image from './Image'
import SocialIcon from '@/components/social-icons'

const ProjectCard = ({ title, description, img, githubUrl, projectUrl, tech, dataTestid }) => (
  <div
    className="max-w-sm overflow-hidden rounded-xl shadow-lg dark:bg-gray-600 dark:shadow-cyan-600/50"
    data-testid={dataTestid}
  >
    <Image className="w-full" alt={title} src={img} width={544} height={306} />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">{title}</div>
      <p className="text-base text-gray-500 dark:text-gray-100">{description}</p>
    </div>
    <div className="flex px-6 pt-3 pb-2">
      {tech.map((t) => (
        <span
          key={t}
          className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-500 dark:bg-cyan-600 dark:text-gray-100"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="mb-3 flex space-x-4 px-6 pt-3 pb-3">
      <SocialIcon kind="github" href={githubUrl} size="6" />
      <SocialIcon kind="external_link" href={projectUrl} size="6" />
    </div>
  </div>
)

export default ProjectCard
