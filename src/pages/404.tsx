/*
 * 400 Error Page
 *
 * A 404 page may be accessed very often.
 * Server-rendering an error page for every visit increases the load of the Next.js server
 *
 * @see https://nextjs.org/docs/advanced-features/custom-error-page
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function FourZeroFour(): JSX.Element {
	return (
		<>
			<NextSeo
				title="404 Error"
				description="A short description goes here."
			/>
			<h1>404 - Page Not Found</h1>
		</>
	)
}
