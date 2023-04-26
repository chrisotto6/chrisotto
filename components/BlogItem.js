import Image from './Image'
import Link from 'next/link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const BlogItem = ({ slug, date, title, summary, tags, image, readingTime }) => (
  <article
    // prettier-ignore
    className="display:block w-full gap-6 space-y-2 rounded-xl xl:grid xl:grid-cols-2 xl:items-start dark:hover:bg-sky-700/40 hover:bg-gray-100"
    data-testid="list-blog-item"
  >
    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
      <Image className="w-full rounded-xl" alt={title} src={image} width={450} height={250} />
    </Link>
    <div className="space-y-6">
      <div className="space-y-5 xl:col-span-3">
        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="inline-block text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
                <p>{readingTime.text}</p>
              </dd>
            </dl>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
        </Link>
        <div className="flex flex-wrap" data-testid="tag-container">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  </article>
)

export default BlogItem
