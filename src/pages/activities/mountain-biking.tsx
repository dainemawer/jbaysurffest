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
				<Image sizes="(max-width: 500px) 500px, (max-width: 1023px) 959, 1000px" className="my-8 mx-auto" src="/images/mountain-biking.jpg" alt="Mountain bike on a hill at dusk" width="1000" height="667" />
				<h2 className="text-lg lg:text-2xl text-black text-center leading-tight uppercase font-extrabold mb-12">Jbay Wind Farm MTB Classic Back as Part Of The JBay Surf Festival, 2023</h2>

				<p className="page-paragraph">
					Jeffreys Bay Wind Farm has reaffirmed its patronage as title sponsor for the J-Bay Windfarm
					MTB Classic &amp; Trail Run 2023, which forms part of the town&apos;s Jbay Surf Festival 2023
					programme! Taking place on Saturday 15 th July this year, this event is now in its eighth
					year, following a CV-19 hiatus.
				</p>

				<h3 className="terms-heading">Event Details:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Date:</strong> 15th - 16th July, 2023</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Location:</strong> Wind Farm</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Registration:</strong> Click the link below for registration at Mountain Events.</li>
				</ul>

				<br />

				<p className="page-paragraph">The local wind project will once again provide support to this much-loved local event and remain
				the title sponsor of the mountain bike and trail run event, which carries the unique distinction of
				being the only one-day race in Africa to traverse a wind farm.</p>

				<p className="page-paragraph">“Being a carbon-free, clean sport, mountain-biking fits our wind farm&apos;s ethos perfectly, but more
				importantly, this event is part of the town&apos;s overarching surfing event, which lies at the heart the
				community,” announced Pieter Oosthuizen, Asset Director at Jeffreys Bay Wind Farm.</p>

				<p className="page-paragraph">The event is created to suite a range of fitness and skill levels, welcoming all who want to be part
				of this popular event. The race starts from Mentorskraal, Jeffreys Bay, and includes a 60km ride
				for the serious riders; 30km ride and even a 10km for family and general enthusiasts. The trail run
				caters for two fitness levels with 5km and 10km options. Prizes will be awarded to the first three
				male and female athletes per distance.</p>

				<p className="page-paragraph">Entries will open on 9 June 2023, via the Mountain Events platform:</p>

				<p className="text-center mt-8"><a className="page-hyperlink" href="https://mountainevents.co.za/events-calendar/j-bay-windfarm-mtb-classic-trail-run" target="_blank" rel="noreferrer">Enter the MTB Race</a></p>
			</div>
		</>
	)
}
