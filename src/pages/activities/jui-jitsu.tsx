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
				<h1 className="page-title">Jiu Jitsu</h1>
				<Image sizes="(max-width: 500px) 500px, (max-width: 1023px) 959, 1000px" className="my-8 mx-auto" src="/images/juijitsu.jpg" alt="Martial artists rolling on a mat." width="1000" height="667" />
				<h2 className="text-lg lg:text-2xl text-black text-center leading-tight uppercase font-extrabold mb-12">Step onto the Mats: JBay Surf Festival Jiu-Jitsu Event</h2>

				<p>Prepare to witness the art of grappling and ground fighting at the JBay Surf Festival&apos;s highly anticipated Jiu-Jitsu Event! This dynamic and technical martial art brings together skilled practitioners from near and far to showcase their expertise, strength, and strategy. Read on to learn more about the Jiu-Jitsu Event, its significance, and how you can be a part of this thrilling display of skill and technique.</p>

				<h3 className="terms-heading">Event Details:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Date:</strong> [Insert Date]</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Location:</strong> [Insert Venue]</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Registration:</strong> Pre-registration is required. Visit our official festival website to secure your spot.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Skill Level:</strong> The event welcomes participants of all experience levels, with divisions available for beginners, intermediate, and advanced practitioners.</li>
				</ul>

				<h3 className="terms-heading">The Art of Jiu-Jitsu:</h3>

				<p className="page-paragraph">Originating in Japan and perfected in Brazil, Jiu-Jitsu is a martial art that emphasizes technique and leverage over strength and size. Participants, known as &quot;jiu-jitsukas,&quot; engage in controlled grappling and submission holds, utilizing joint locks and chokes to neutralize opponents. The Jiu-Jitsu Event at the JBay Surf Festival showcases the mastery of this martial art, highlighting the discipline, strategy, and respect that define its practitioners.</p>

				<h3 className="terms-heading">Competition Divisions:</h3>

				<p className="page-paragraph">The JBay Surf Festival Jiu-Jitsu Event offers a range of competition divisions to cater to participants of different skill levels. Divisions may include:</p>

				<ul className="list-disc">

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Beginner Division:</strong> Designed for those new to Jiu-Jitsu or with limited experience. This division allows participants to test their skills in a supportive and encouraging environment.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Intermediate Division:</strong> Suited for practitioners who have developed a solid foundation in Jiu-Jitsu and are ready to compete at a higher level. Intermediate matches showcase a higher level of technical proficiency and tactical awareness.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Advanced Division:</strong> Reserved for highly skilled jiu-jitsukas who possess a deep understanding of the art. Advanced matches feature fast-paced exchanges, intricate submissions, and strategic grappling.</li>
				</ul>

				<h3 className="terms-heading">How to Participate:</h3>

				<p className="page-paragraph">Participating in the JBay Surf Festival Jiu-Jitsu Event is a straightforward process. Here&apos;s what you need to do:</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Pre-register:</strong> Visit our official festival website and navigate to the Jiu-Jitsu Event section to secure your spot. Due to limited capacity, early registration is recommended.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Select Your Division:</strong> Choose the division that aligns with your skill level and experience. It&apos;s important to compete against opponents who challenge and inspire your growth as a practitioner.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Gear Up:</strong> Ensure you have the required attire for the event, including a clean and appropriate Jiu-Jitsu gi (uniform). Familiarize yourself with any additional equipment regulations specified by the event organizers.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Attend the Rules Briefing:</strong> On the day of the event, attend the mandatory rules briefing session to understand the competition rules, safety guidelines, and any specific instructions from the event organizers.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg"><strong>Showcase Your Skills:</strong> Step onto the mats, compete with passion and respect, and demonstrate your technical proficiency, agility, and strategic thinking. Engage in matches that showcase your dedication to the art of Jiu-Jitsu.</li>
				</ul>

				<h3 className="terms-heading">Important Notes:</h3>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">The JBay Surf Festival Jiu-Jitsu Event is conducted under the rules and guidelines established by recognized Jiu-Jitsu organizations or federations.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">Participants are expected to display good sportsmanship, respect for opponents, and adherence to the principles of Jiu-Jitsu.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">Safety is paramount. Event organizers prioritize the well-being of all participants and enforce regulations to ensure a safe and fair competition environment.</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">Experience the artistry and intensity of Jiu-Jitsu at the JBay Surf Festival. Witness skilled practitioners engage in captivating matches, showcasing the technical brilliance andspirit of this martial art. Don&apos;t miss</li>
				</ul>
				<p className="text-center mt-8"><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">Enter the competition</a></p>
			</div>
		</>
	)
}
