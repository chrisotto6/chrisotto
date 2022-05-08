import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PageLayout'

export async function getStaticProps() {
  const uses = await getFileBySlug('uses', 'uses')
  return { props: { uses } }
}

export default function UsesPage({ uses }) {
  const { mdxSource, frontMatter } = uses

  return (
    <MDXLayoutRenderer layout={DEFAULT_LAYOUT} mdxSource={mdxSource} frontMatter={frontMatter} />
  )
}
