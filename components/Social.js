import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import siteMetadata from '@/data/siteMetadata'

const Social = () => {
  return (
    <div className="flex space-x-4 pt-6">
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
  )
}

export default Social
