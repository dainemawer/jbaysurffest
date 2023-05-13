/*
 * Funduro
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Funduro(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Funduro"
			/>
			<div className="page-container">
				<h1 className="page-title">Funduro</h1>
			</div>
		</>
	)
}
