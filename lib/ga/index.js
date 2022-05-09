import siteMetadata from '@/data/siteMetadata'

// log the pageview with their URL
export const pageview = (url) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', siteMetadata.analytics.googleAnalyticsId, {
      page_path: url,
    })
  }
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
