/*
 * Foundation
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Foundation(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Foundation"
			/>
			<div className="page-container">
				<h1 className="page-title">Foundation</h1>
				<Image sizes="(max-width: 500px) 500px, (max-width: 1023px) 959, 1000px" className="my-8 mx-auto" src="/images/surfboards.jpg" alt="Surfboards in a line" width="1000" height="667" />

				<p>The Jbay Surf Foundation is a non-profit organization dedicated to empowering the youth of Jeffreys Bay through the transformative power of surfing. With a mission to provide opportunities, mentorship, and education to underprivileged children in the local community, the foundation plays a vital role in nurturing talent, building confidence, and instilling a love for the ocean.</p>

				<p>If you&apos;re passionate about making a difference and want to contribute to this worthy cause, there are several ways you can get involved and support the Jbay Surf Foundation&apos;s impactful work. Whether through donations, volunteering, or spreading awareness, your contribution can help create a brighter future for the youth of Jeffreys Bay and foster a lifelong connection to the waves they call home.</p>

				<p className="text-center mt-8"><a className="font-semibold uppercase inline-block text-base md:text-2xl border-b-4 border-[#458185]" href="https://airdosh.co.za" target="_blank" rel="noreferrer">Donate</a></p>
			</div>
		</>
	)
}
