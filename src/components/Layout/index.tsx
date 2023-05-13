/*
 * Layout
 *
 * This is the main layout for the app
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
*/

import Header from '@components/Header'
import Footer from '@components/Footer'
import SkipLink from '@components/SkipLink'
import { Dosis } from 'next/font/google';

const dosis = Dosis({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dosis',
});

export default function Layout({ children }): JSX.Element {
	return (
		<div className={`mx-auto max-w-[1920px] ${dosis.variable}`}>
			<SkipLink />
			<div id="top" />
			<Header />
			<main id="main-content" className="container mx-auto max-w-7xl px-8 2xl:px-0">{children}</main>
			<Footer />
		</div>

	)
}
