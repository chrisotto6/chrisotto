import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-5 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-3 flex space-x-8">
          <Link href={`mailto:${siteMetadata.email}`}>
            <FaEnvelope size={30} />
          </Link>
          <Link href={siteMetadata.github}>
            <FaGithub size={30} />
          </Link>
          <Link href={siteMetadata.linkedin}>
            <FaLinkedin size={30} />
          </Link>
          <Link href={siteMetadata.twitter}>
            <FaTwitter size={30} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
