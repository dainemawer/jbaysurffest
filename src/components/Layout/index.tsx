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

export default function Layout({ children }): JSX.Element {
	return (
		<>
			<SkipLink />
			<Header />
			<main id="site-content" className="site-content">{children}</main>
			<Footer />
		</>

	)
}
