/*
 * Jui Jitsu
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function JuiJitsu(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Jui Jitsu"
			/>
			<div className="page-container">
				<h1 className="page-title">Jui Jitsu</h1>
			</div>
		</>
	)
}
