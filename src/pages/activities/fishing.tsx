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
				<Image sizes="(max-width: 500px) 500px, (max-width: 1023px) 959, 1000px" className="my-8 mx-auto" src="/images/fishing-jbay.jpg" alt="A fisherman casting a line into a river" width="1000" height="667" />
				<h2 className="text-lg lg:text-2xl text-black text-center leading-tight uppercase font-extrabold mb-12">Cast Your Line at the JBay Surf Festival Fishing Event!</h2>

				<p>Join us for a thrilling fishing experience amidst the picturesque coastal beauty of Jeffreys Bay at the JBay Surf Festival Fishing Event! Whether you&apos;re a seasoned angler or just starting out, this event offers a fantastic opportunity to showcase your fishing skills, enjoy the tranquil surroundings, and compete for exciting prizes. Read on to learn more about the Fishing Event, the fishing zones, and how you can be part of this exciting angling adventure.</p>

				<h3 className="terms-heading">Event Details:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Date:</strong> 13 July, 2023</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Location:</strong> Jeffreys Bay and Surrounding Fishing Zones</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Registration:</strong> Pre-registration is required. Visit our official festival website to secure your spot.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Skill Level:</strong> The event welcomes anglers of all experience levels, from beginners to advanced fishermen.</li>
				</ul>

				<h3 className="terms-heading">The Joy of Fishing:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						The JBay Surf Festival Fishing Event celebrates the joy of fishing, bringing together fishing enthusiasts from near and far. This event allows you to indulge in your passion for angling while enjoying the serenity of the coastal waters surrounding Jeffreys Bay. It&apos;s an opportunity to showcase your fishing skills, connect with like-minded individuals, and create lasting memories.
					</li>
				</ul>

				<h3 className="terms-heading">Fishing Zones:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Jeffreys Bay offers a variety of fishing zones, each with its own unique characteristics and fishing opportunities. During the Fishing Event, you&apos;ll have the chance to explore:
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Surf Fishing: Experience the thrill of surf fishing along the pristine coastline of Jeffreys Bay. Cast your line into the rolling waves, targeting a variety of surf-dwelling species such as kob, garrick, and stumpnose.
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Estuary Fishing: Explore the tranquil estuaries and lagoons surrounding Jeffreys Bay, known for their rich biodiversity. Test your angling skills as you target species like grunter, leervis, and mullet in these productive fishing grounds.
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Rock and Pier Fishing: Challenge yourself with rock and pier fishing, where you&apos;ll navigate rocky outcrops and piers to access prime fishing spots. Target species such as blacktail, galjoen, and white steenbras, known for their fighting spirit.
					</li>
				</ul>

				<h3 className="terms-heading">How to Participate:</h3>

				<p className="page-paragraph">Participating in the JBay Surf Festival Fishing Event is simple and rewarding. Here&apos;s how you can get involved:</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Pre-register: Visit our official festival website and navigate to the Fishing Event section to secure your spot. Early registration is recommended as spots may be limited.
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Select Your Fishing Zone: Choose the fishing zone that aligns with your preference and angling skills. Whether you prefer surf fishing, estuary fishing, or rock and pier fishing, there&apos;s a zone that suits your style.
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Gather Your Gear: Ensure you have the necessary fishing equipment, including fishing rods, reels, lines, hooks, and bait appropriate for your target species and fishing zone. Don&apos;t forget to bring a tackle box, sunscreen, and other fishing essentials.
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Attend the Briefing: On the day of the event, attend the mandatory briefing session to familiarize yourself with the fishing rules and regulations, safety guidelines, and any specific instructions from the event organizers.
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Cast Your Line: Set up at your chosen fishing zone, cast your line with skill and precision, and immerse yourself in the peaceful art of fishing. Enjoy the experience, connect with fellow anglers, and appreciate the beauty of Jeffreys Bay&apos;s coastal surroundings.
					</li>
				</ul>

				<h3 className="terms-heading">Important Notes:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						The JBay Surf Festival Fishing Event adheres to local fishing regulations and guidelines. Participants are expected to comply with these regulations, including catch limits, size restrictions, and closed seasons.
					</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Anglers are responsible for obtaining any required fishing permits or licenses before participating in the event.
						The event organizers prioritize the safety and well
					</li>
				</ul>

				<p className="text-center mt-8"><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">Enter the Fishing Competition</a></p>
			</div>
		</>
	)
}
