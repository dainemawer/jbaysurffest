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
				<Image sizes="(max-width: 500px) 500px, (max-width: 1023px) 959, 1000px" className="my-8 mx-auto" src="/images/funduro-jbay.jpg" alt="Motocross bike skidding through dirt" width="1000" height="667" />
				<h2 className="text-lg lg:text-2xl text-black text-center leading-tight uppercase font-extrabold mb-12">Rev Up for the JBay Surf Festival Funduro Event!</h2>

				<p>Get ready to kick up some dirt and conquer thrilling off-road trails at the JBay Surf Festival&apos;s action-packed Funduro Event! This exhilarating motorbike adventure is designed for riders of all skill levels who are ready to embrace the thrill of off-road riding. Read on to discover more about the Funduro Event, the trails, and how you can be part of this high-octane experience.</p>

				<h3 className="terms-heading">Event Details:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Date:</strong> 15 July 2023</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Location:</strong> TBD</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Registration:</strong> Pre-registration is required. Visit our official festival website to secure your spot.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Skill Level:</strong> The event caters to riders of all levels, from beginners to experienced riders.</li>
				</ul>

				<h3 className="terms-heading">The Thrill of Funduro:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">The Funduro Event is all about pushing your limits and embracing the adrenaline rush of off-road riding. Whether you&apos;re a seasoned rider or a newbie looking for an exciting challenge, this event offers a unique opportunity to explore the rugged terrains and scenic landscapes surrounding Jeffreys Bay. Get ready to navigate through diverse off-road trails, conquer obstacles, and experience the freedom that comes with off-road motorcycling.</li>
				</ul>

				<h3 className="terms-heading">The Trails:</h3>

				<p className="page-paragraph">Jeffreys Bay and its surroundings boast a variety of terrain types that are perfect for off-road riding. During the Funduro Event, you&apos;ll have the chance to conquer:</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">Bush Tracks: Navigate through winding bush tracks, weaving through trees and shrubs as you tackle challenging twists and turns. These trails will test your riding skills and agility.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Forest Paths: Immerse yourself in the natural beauty of the lush forests surrounding Jeffreys Bay. Ride through scenic trails enveloped by towering trees, encountering exciting obstacles along the way.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Hill Climbs: Conquer steep and challenging inclines as you power your way up thrilling hill climbs. Feel the rush of adrenaline as you conquer these formidable obstacles.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">River Crossings: Test your bike&apos;s capabilities as you navigate through river crossings, splashing through water and traversing uneven terrain. These crossings require skill, balance, and a sense of adventure.</li>
				</ul>

				<h3 className="terms-heading">How to Participate:</h3>

				<p className="page-paragraph">Participating in the JBay Surf Festival Funduro Event is easy and exciting. Here&apos;s what you need to do:</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Pre-register:</strong> Visit our official festival website and navigate to the Funduro Event section to secure your spot. Early registration is recommended as spaces are limited.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Select Your Skill Level:</strong> Choose the appropriate category based on your skill level. Whether you&apos;re a beginner looking for a scenic ride or an experienced rider seeking challenging trails, there&apos;s a category for you.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Gear Up:</strong> Ensure you have the necessary safety gear, including a well-maintained off-road motorcycle, a helmet, goggles, boots, and appropriate protective clothing. Safety is paramount, so come prepared.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Attend the Rider Briefing:</strong> On the day of the event, attend the mandatory rider briefing session to familiarize yourself with the routes, safety guidelines, and any specific instructions from the event organizers.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Embrace the Adventure:</strong> Set off on an unforgettable off-road riding experience, conquering the diverse trails, challenging obstacles, and scenic landscapes. Embrace the thrill of Funduro and enjoy the camaraderie of fellow riders.</li>
				</ul>

				<h3 className="terms-heading">Important Notes:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">The JBay Surf Festival Funduro Event requires participants to adhere to designated routes and follow all safety guidelines provided by event organizers.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">All riders are responsible for their own safety and must exercise caution and respect for fellow participants.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">Riders should possess a valid motorcycle license and adhere to all relevant local traffic laws and regulations.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">Event organizers reserve the right to modify the event schedule, routes, or regulations in case of inclement weather or unforeseen circumstances.</li>
				</ul>

				<p className="text-center mt-8"><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">Enter the Funduro Race</a></p>
			</div>
		</>
	)
}
