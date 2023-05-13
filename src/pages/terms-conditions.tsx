/*
 * Terms and Conditions
 *
 * Page template responsible for rendering
 * the terms and conditions content.
 *
 * @returns {JSX.Element}
 * @since 1.0.0
 * @autor Daine Mawer
*/

import { NextSeo } from 'next-seo';
import Terms from '@components/Terms';
import { terms } from 'data';

export default function TermsAndConditions(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Terms and Conditions"
				description="Terms and Conditions for the Jeffreys Bay Music Festival."
			/>
			<div className="page-container">
				<h1 className="page-title">Terms &amp; Conditions</h1>
				{terms && terms.map((term, index) => (
					<Terms
						key={index}
						title={term.title}
						items={term.content}
					/>
				))}
			</div>
		</>
	)
}
