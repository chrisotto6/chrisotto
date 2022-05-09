import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import ErrorBoundary from '@/components/ErrorBoundary'
import * as ga from '../lib/ga'

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    if (isProduction) {
      router.events.on('routeChangeComplete', handleRouteChange)
    }

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      if (isProduction) {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <ErrorBoundary>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
