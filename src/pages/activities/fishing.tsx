/*
 * Fishing
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Fishing(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Fishing"
			/>
			<div className="page-container">
				<h1 className="page-title">Fishing</h1>
			</div>
		</>
	)
}
