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
				<h2 className="text-lg lg:text-2xl text-black text-center leading-tight uppercase font-extrabold mb-12">Gear Up for the JBay Surf Festival Mountain Biking Event!</h2>

				<p>Get ready for an adrenaline-fueled adventure at the JBay Surf Festival&apos;s exhilarating Mountain Biking Event! This exciting addition to the festival lineup offers mountain biking enthusiasts the perfect opportunity to experience the rugged beauty of Jeffreys Bay and its surrounding trails. Read on to discover more about the event, the trails, and how you can be a part of this thrilling mountain biking experience.</p>

				<h3 className="terms-heading">Event Details:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Date:</strong> 13 July, 2023</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Location:</strong> Jeffreys Bay and Surrounding Areas</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Registration:</strong> Pre-registration is required. Visit our official festival website to secure your spot.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Skill Level:</strong> The event caters to riders of various skill levels, with designated routes available for beginners, intermediate riders, and advanced riders.</li>
				</ul>

				<h3 className="terms-heading">The Trails:</h3>

				<p className="page-paragraph">Jeffreys Bay and its surroundings boast a plethora of captivating trails that are sure to get your heart pumping and your wheels spinning. During the Mountain Biking Event, you&apos;ll have the chance to explore:</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">Coastal Trails: Enjoy the breathtaking coastal views as you navigate trails that wind along the rugged coastline. Feel the refreshing ocean breeze on your face as you tackle thrilling descents and challenging climbs.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Forest Routes: Immerse yourself in the tranquility of the lush forests surrounding Jeffreys Bay. Pedal through dense canopies, conquer technical sections, and revel in the natural beauty that surrounds you.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Dune Rides: Experience the unique thrill of riding through the towering dunes near Jeffreys Bay. Navigate sandy terrains, catch air on the dune jumps, and feel the rush of conquering these natural obstacles.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Mountain Passes: Challenge yourself with the mountain passes that offer breathtaking vistas and exhilarating descents. Ride along ridges and witness the stunning landscapes that make this region a mountain biker&apos;s paradise.</li>
				</ul>

				<h3 className="terms-heading">How to Participate:</h3>

				<p className="page-paragraph">Participating in the JBay Surf Festival Mountain Biking Event is a straightforward process. Here&apos;s what you need to do:</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Pre-register:</strong> Visit our official festival website and navigate to the Mountain Biking Event section to secure your spot. Early registration is recommended as spaces are limited.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Select Your Skill Level:</strong> Choose the appropriate route based on your skill level. Whether you&apos;re a beginner looking for a leisurely ride or an experienced rider seeking a challenging adventure, there&apos;s a route for you.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Gear Up:</strong> Ensure you have the necessary gear, including a well-maintained mountain bike, a helmet, and appropriate attire. It&apos;s also advisable to bring extra water, snacks, and any personal items you may need during the ride.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Attend the Briefing:</strong> On the day of the event, attend the mandatory briefing session to familiarize yourself with the routes, safety guidelines, and any specific instructions from the event organizers.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Enjoy the Ride:</strong> Embark on an unforgettable mountain biking experience, soak up the incredible scenery, and revel in the camaraderie of fellow riders. Push your limits, conquer challenges, and make lasting memories.</li>
				</ul>

				<h3 className="terms-heading">Important Notes:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						The JBay Surf Festival Mountain Biking Event requires participants to adhere to designated routes and follow all safety guidelines provided by event organizers.
					</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						It is recommended that participants possess a reasonable level of fitness and experience in off-road biking.
					</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Participants are responsible for their own safety and well-being during the event.
					</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						In case of inclement weather or unforeseen circumstances, event organizers reserve the right to make changes to the event schedule or routes.
					</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Gear up, tighten your helmet, and prepare for an unforgettable mountain biking experience at the JBay Surf Festival. Don&apos;t miss out on the chance to explore the incredible trails surrounding Jeffreys Bay and take part in this thrilling adventure.
					</li>
				</ul>
				<p className="text-center mt-8"><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">Enter the MTB Race</a></p>
			</div>
		</>
	)
}
