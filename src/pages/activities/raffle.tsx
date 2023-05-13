/*
 * Raffle
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Raffle(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Raffle"
			/>
			<div className="page-container">
				<h1 className="page-title">Raffle</h1>
			</div>
		</>
	)
}
