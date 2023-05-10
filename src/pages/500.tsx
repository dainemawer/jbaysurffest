/*
 * 500 Error Page
 *
 * Server-rendering an error page for every visit adds
 * complexity to responding to errors.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-error-page
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function FiveZeroZero(): JSX.Element {
	return (
		<>
			<NextSeo
				title="500 Error"
				description="A short description goes here."
			/>
			<h1>500 - Internal Server Error</h1>
		</>
	)
}
