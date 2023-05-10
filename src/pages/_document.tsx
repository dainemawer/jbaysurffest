/*
 * Custom Document
 *
 * A custom Document can update
 * the <html> and <body> tags used to render a Page.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 * @returns {JSX.Element}
*/

import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@lib/gtag/analytics'

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head />
			<body className="site-name">
				<Main />
				<NextScript />

				{/* Support for window.gtag on the server */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						`,
					}}
				/>
			</body>
		</Html>
	)
}
