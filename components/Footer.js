import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import Social from '@/components/Social'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-5 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">{siteMetadata.footer}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <Social />
      </div>
    </footer>
  )
}
