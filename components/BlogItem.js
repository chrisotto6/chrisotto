import Image from './Image'
import Link from './Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const BlogItem = ({ slug, date, title, summary, tags, image, readingTime }) => (
  <article className="space-y-2 xl:grid xl:grid-cols-2 xl:items-baseline xl:space-y-0">
    <Image className="w-full" alt={title} src={image} width={178} height={250} />
    <div className="space-y-6">
      <div className="space-y-5 xl:col-span-3">
        <div>
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
              {title}
            </Link>
          </h2>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="inline-block text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              {console.log(readingTime)}
              {readingTime.text}
              <time className="px-6 py-4" dateTime={date}>
                {formatDate(date)}
              </time>
            </dd>
          </dl>
        </div>
        <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
      </div>
      <div className="text-base font-medium leading-6">
        <Link
          href={`/blog/${slug}`}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Read "${title}"`}
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  </article>
)

export default BlogItem