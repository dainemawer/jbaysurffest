/*
 * Mountain Biking
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function MountainBiking(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Mountain Biking"
			/>
			<div className="page-container">
				<h1 className="page-title">Mountain Biking</h1>
			</div>
		</>
	)
}
