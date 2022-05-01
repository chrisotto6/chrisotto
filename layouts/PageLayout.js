import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'

export default function PageLayout({ frontMatter, children }) {
  const { title, description } = frontMatter

  return (
    <>
      <PageSEO title={title} description={description} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>{title}</PageTitle>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <div className="items-start space-y-2">
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark">{children}</div>
        </div>
      </div>
    </>
  )
}
