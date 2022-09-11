import Image from './Image'
import Link from './Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const BlogItem = ({ slug, date, title, summary, tags, image, readingTime }) => (
  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
    <article
      className="display: block gap-6 space-y-2 xl:grid xl:grid-cols-2 xl:items-baseline xl:space-y-0"
      data-testid="list-blog-item"
    >
      <Image
        className="w-full rounded-xl"
        alt={title}
        src={image}
        layout="responsive"
        width={450}
        height={250}
      />
      <div className="space-y-6">
        <div className="space-y-5 xl:col-span-3">
          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                {title}
              </Link>
            </h2>
            <div className="flex flex-wrap" data-testid="tag-container">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="inline-block text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
                <p>{readingTime.text}</p>
              </dd>
            </dl>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
        </div>
      </div>
    </article>
  </Link>
)

export default BlogItem
