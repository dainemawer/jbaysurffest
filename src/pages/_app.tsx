/*
 * Custom App
 *
 * Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @returns {JSX.Element}
*/

import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo';
import { sendPageView } from '@lib/gtag'
import { GoogleAnalytics, sendToAnalytics } from '@lib/gtag/analytics';
import { SiteContext, store } from '@context/SiteContext';
import Layout from '@components/Layout'
import ErrorBoundary from '@components/ErrorBoundary'

import SEO from '../next-seo.config';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			sendPageView(url)
		}

		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<SiteContext.Provider value={store}>
			<Layout>
				<ErrorBoundary>
					<DefaultSeo {...SEO} />
					<GoogleAnalytics />
					<Component {...pageProps} />
				</ErrorBoundary>
			</Layout>
		</SiteContext.Provider>
	)
}

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
	if (typeof window !== 'undefined') {
		sendToAnalytics(id, name, label, value);
	}
}
