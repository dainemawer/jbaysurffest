/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import { Accordion } from '@components/Accordion';
import Image from 'next/image';
import Section from '@components/Section';
import Countdown from 'react-countdown';

import { faqs, sponsors, lineup } from 'data';

export default function Home(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Home"
				description="A 10 day festival full of activities, music, surf and everything in between. Welcome to the Jeffreys Bay Music Festival."
			/>
			<div className="flex flex-col items-center mt-8">
				<h1 className="text-4xl lg:text-7xl text-black text-center leading-tight max-w-[824px] uppercase font-extrabold mb-5">Welcome to the JBay Surf Festival, 2023</h1>
				{typeof window !== 'undefined' && (
					<Countdown
						date={new Date("13 July 2023")}
						renderer={({ days, hours, minutes, seconds }) => (
							<div>
								<span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{days}</span> <span className="uppercase text-2xl lg:text-[2rem] inline-block mr-4">days</span> <span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{hours}</span> <span className="uppercase text-2xl lg:text-[2rem] inline-block mr-4">hrs</span> <span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{minutes}</span> <span className="uppercase text-2xl lg:text-[2rem] inline-block mr-4">mins</span> <span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{seconds}</span> <span className="uppercase text-2xl lg:text-[2rem]">secs</span>
							</div>
						)}
					/>
				)}
				<p className="section-paragraph">The festival usually takes place over a period of 10 days in July, and features a variety of surfing competitions, exhibitions, and other related events. The main event is the World Surf League (WSL) Championship Tour, which is held at the famous Supertubes surf break, known for its long, hollow waves that are ideal for surfing.</p>
			</div>
			<Section id="music" label="Music for the Jbay Surf Festival" title="Music" rotate="-rotate-1 mb-8 lg:mb-16">
				<p className="section-paragraph">Music enthusiasts from near and far for a memorable celebration of sound and rhythm. Set against the backdrop of the picturesque coastal town of Jeffreys Bay, this festival showcases a diverse lineup of talented musicians and bands, spanning various genres and styles.</p>

				<p className="section-paragraph">Attendees can expect an immersive experience filled with live performances that ignite the stage with energy and passion. From the soulful melodies of acoustic acts to the electrifying beats of rock and pop bands, the festival caters to a wide range of musical tastes, ensuring there&apos;s something for everyone to enjoy.</p>

				<p className="section-paragraph">In addition to the exceptional musical performances, the Jeffreys Bay Music Festival offers a lively and inclusive atmosphere, fostering a sense of community among festival-goers. With food stalls offering a delectable array of culinary delights, local artisans showcasing their crafts, and interactive activities for all ages, the festival creates an engaging and enjoyable environment beyond the music itself.</p>
			</Section>
			<Section id="artists" label="Line up for the Jbay Surf Festival" title="Artists" rotate="-rotate-1 mb-8 lg:mb-16">
				<div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
					{lineup && lineup.map((item, index) => {
						return (
							<div className="flex flex-col border-color items-center" key={`lineup-${item.id}`}>
								<a className="[&>*]:hover:grayscale transition-all" href={item.link} target="_blank" rel="noreferrer"><Image className="border-8 rounded-full" src={item.image} alt={item.name} width={151} height={151} /></a>
								<h4 className="text-center text-lg lg:text-xl font-semibold uppercase mt-6">{item.name}</h4>
							</div>
						)
					})}
				</div>
			</Section>
			<Section id="line-up" label="Line up for the Jbay Surf Festival" title="Line Up" rotate="-rotate-1 mb-8 lg:mb-16">
				<div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
					<p className="section-paragraph">Line up TBD.</p>
				</div>
			</Section>
			<Section id="tickets" label="Buy tickets Jbay Surf Festival" title="Tickets" rotate="rotate-1 mb-8 lg:mb-16 mt-6">
				<p className="section-paragraph">
					Attending the Jeffreys Bay Surf Festival is a must-do for any surfing enthusiast or lover of beach culture. Whether you&pos;re there to watch the world&pos;s best surfers compete, enjoy live music performances, or simply soak up the sun and enjoy the stunning coastal scenery, the festival offers something for everyone. Tickets can be purchased using the Airdosh QR code below
				</p>
				<p><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">QR Code Not Working? Visit Airdosh</a></p>
			</Section>
			<Section id="faq" label="Frequently asked questions about the Jbay Surf Festival" title="FAQ" rotate="-rotate-1 mb-8 lg:mb-16">
				<Accordion faqs={faqs} />
			</Section>
			<Section id="sponsors" label="Our Sponsors" title="Sponsors" rotate="rotate-1 mb-8 lg:mb-16 mt-6">
				<div className="grid grid-cols-2 md:grid-cols-6">
					{sponsors && sponsors.map((item) => {
						return (
							<div key={`sponsor-${item.id}`}>
								<a className="block" href={item.link} target="_blank" rel="noreferrer">
									<Image className="grayscale mx-auto hover:grayscale-0 transition-all" src={item.image} alt={item.name} width={151} height={151} />
								</a>
								<h4 className="sr-only">{item.name}</h4>
							</div>
						);
					})}
				</div>
			</Section>
		</>
	)
}
