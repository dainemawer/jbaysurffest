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
import dynamic from 'next/dynamic';

import { faqs, sponsors, lineup } from 'data';

const CountdownTimer = dynamic(() => import('../components/Countdown'), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export default function Home(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Home"
				description="A 10 day festival full of activities, music, surf and everything in between. Welcome to the Jeffreys Bay Music Festival."
			/>
			<div className="flex flex-col items-center mt-8">
				<h1 className="text-4xl lg:text-7xl text-black text-center leading-tight max-w-[824px] uppercase font-extrabold mb-5">Welcome to the JBay Surf Festival, 2023</h1>
				<CountdownTimer />
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
							<div className="flex flex-col border-color items-center w-40" key={`lineup-${item.id}`}>
								<a className="[&>*]:hover:grayscale transition-all" href={item.link} target="_blank" rel="noreferrer">
									<Image className="border-8 rounded-full h-40 w-40 object-cover" src={item.image} alt={item.name} width={151} height={151} /></a>
								<h3 className="text-center text-lg lg:text-xl font-semibold uppercase mt-6">{item.name}</h3>
							</div>
						)
					})}
				</div>
			</Section>
			<Section id="line-up" label="Line up for the Jbay Surf Festival" title="Line Up" rotate="-rotate-1 mb-8 lg:mb-16">
				<figure>
					<Image loading="lazy" className="mx-auto" src="/park-off.jpeg" alt="Airdosh QR Code" width={908} height={1286} />
				</figure>
			</Section>
			<Section id="tickets" label="Buy tickets Jbay Surf Festival" title="Tickets" rotate="rotate-1 mb-8 lg:mb-16 mt-6">
				<p className="section-paragraph">
					Attending the Jeffreys Bay Surf Festival is a must-do for any surfing enthusiast or lover of beach culture. Whether you&pos;re there to watch the world&pos;s best surfers compete, enjoy live music performances, or simply soak up the sun and enjoy the stunning coastal scenery, the festival offers something for everyone. Tickets can be purchased using the Airdosh QR code below
				</p>
				<div className="airdosh">
					<figure className="p-4 rounded-3xl bg-white">
						<Image className="mx-auto" src="/airdosh.png" alt="Airdosh QR Code" width={151} height={151} />
					</figure>
					<div className="p-4 text-white">
						<svg className="mb-4" width="166" height="31" viewBox="0 0 1667 310" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clip-rule="evenodd" d="M601.811.15c-7.6 1-9.9 2.3-11 6.1-1.3 4.8-1.3 32.6 0 37.4 1.4 5.1 5.1 6.1 22.6 6.3 17.5.3 25-.7 27.8-3.5 2-1.9 2.1-3.1 2.1-21.4 0-25.8 1.4-24.4-24-24.9-8.2-.2-16.1-.2-17.5 0ZM1493.31 3.35l-4 .6-.6 7c-.4 3.8-.7 69-.8 144.7l-.1 137.7 2.4 2.8 2.4 2.8 19.1.4c20.6.3 22.4 0 25.3-5.1 1-1.8 1.4-19.6 1.8-81.8l.5-79.5 7.5-3.8c12.4-6.2 19-7.9 33.1-8.4 15.3-.7 21.8.8 28.1 6.5 8 7.2 8 6.7 7.9 55-.1 23.5-.4 57.8-.7 76.2l-.6 33.5 3.1 3 3.1 2.9 18.3.7c10 .4 19.2.5 20.3.2 1.2-.2 3.2-1.8 4.4-3.6l2.3-3.1-.6-80.5c-.7-88.4-.7-87.7-6.9-98.8-10.1-18.3-23.1-29.2-39.9-33.5-7.4-1.8-10.3-2-25.4-1.5-20.6.6-31.5 2.5-44.3 7.6l-9.7 3.8-.5-40.3-.5-40.4-2.8-2.7-2.7-2.8-17.8-.1c-9.7-.1-19.5.1-21.7.5ZM45.81 5.55c-3.4 1.4-5.9 3.8-8.1 7.9-9.8 17.8-12.8 24.1-18 38.3-1.6 4.3-3.3 8.7-3.9 9.7-.9 1.7-6.7 22.2-9.1 32.1-3.3 13.6-6.1 38.8-6.6 57.9-.5 20.9.6 33.8 5.3 61.4 2.5 14.5 11.7 44.7 17.6 57.6 10.6 23.1 17.2 34.7 21.2 37.1 7.4 4.5 19.9 1.1 23.7-6.3 3.1-6.1 2.5-9.6-4.2-23.6-19.7-40.9-29-84-27.6-127.7 1.4-40.7 11.6-82 28.3-113.9 6.4-12.2 6.2-18.6-.4-25.8-4.8-5.1-12.2-7.1-18.2-4.7ZM424.611 8.35c-7.7 2.5-13.6 6.1-20.7 12.7-6.6 6.1-10.7 14.2-13.7 27.1-.8 3.7-2.4 9.3-3.4 12.3s-2.8 9.5-3.9 14.5c-1.2 4.9-2.5 9.9-3.1 11-.5 1.1-2.3 7.4-3.9 14s-4.4 17.2-6.1 23.5c-1.7 6.3-4.6 17.3-6.5 24.5-1.9 7.1-5 19.1-7 26.5-6.2 23.3-10.4 39.1-13 49.5-1.3 5.5-3.2 12.5-4.1 15.5-2 6.6-7.7 28.7-10.9 42.5-2.3 9.6-2.3 10.1-.7 13 1.4 2.2 2.8 3.2 5.8 3.7 5 .9 33.5.9 39.3 0 4.1-.6 4.7-1.1 6.9-5.3 2.2-4.4 5.4-15.8 12.2-44.4 1.6-6.6 4.5-18.8 6.5-27 2-8.3 4.9-20.4 6.5-27 3.7-15.8 6.7-28.2 9.2-38 1.1-4.4 3.2-13.4 4.8-20 1.5-6.6 3.4-14.7 4.3-18 .8-3.3 3.6-15 6.2-26 8.7-36.6 9.6-39.7 12.8-40.8 3.9-1.3 7.4 1.2 8.5 6 .5 2.1 2.3 9.6 4 16.8 1.7 7.1 4.7 19.5 6.6 27.5 1.9 8 5.3 21.9 7.5 31 2.1 9.1 4.9 20.5 6.1 25.5 1.2 4.9 3.5 14.4 5.1 21 1.6 6.6 4.5 18.7 6.4 27 2 8.2 4.9 20.5 6.4 27.1 1.6 6.7 3.4 13.7 4 15.5.6 1.9 2.2 8.3 3.6 14.4 3.3 14.5 7.2 28.4 8.7 31.3 1.9 3.6 7 4.3 29.9 4l21.3-.3 1.5-2.7c1.3-2.3 1.3-3.5.3-8.8-.8-3.4-1.7-7-2.2-7.9-.5-.9-2-6.1-3.4-11.6-2.8-11.7-11.1-43.3-21.1-80.5-1.9-7.4-5.1-19.4-7-26.5-1.8-7.2-5-19.1-7-26.5-1.9-7.4-4.9-18.5-6.5-24.5-21.2-80.8-21.7-81.9-38.5-94.5-2.8-2.1-8.5-4.9-13-6.4-7-2.3-9.6-2.6-20.5-2.5-9.2 0-14 .5-18.2 1.8ZM875.311 8.55c-19.7 1.4-32.9 3.1-35.7 4.5-2.7 1.4-3.1 2.2-4.3 8.1-.3 1.8-.8 62.9-.9 135.8-.3 129.4-.2 132.7 1.7 135.1 4.5 5.7 11.8 6.9 52.5 8.3 34.2 1.3 66.7-.4 74.7-3.8 1.1-.5 5.6-1.9 10-3.1 4.4-1.2 8.2-2.5 8.5-2.8.3-.4 3-1.9 6.1-3.4 25.599-12.2 44.499-37.4 51.399-68.6 2.2-10.1 2.3-13.1 2.8-55.2.4-49.1-.1-62.3-3.1-75.1-5.6-23.6-19.6-45.7-37.2-58.7-11.099-8.1-13.399-9.4-24.199-13.5-11.5-4.5-19.8-6.3-34.9-7.7-13.1-1.1-51.2-1.1-67.4.1Zm67.8 45.4c8.3 1.7 19.9 7.1 25.4 11.9 5.4 4.7 11.7 14.2 13.8 20.8.9 2.9 2 6.1 2.6 7 .5 1 1.3 4.8 1.9 8.5 1.3 8.9 1.3 96 0 103.8-1.3 8.1-6.2 20.9-10.1 26.4-6.4 9-16.4 16.3-26.9 19.5-3 1-6.6 2.3-7.9 2.9-2.6 1.3-49.2 1.7-52.3.4-1.7-.6-1.8-6.3-1.8-101.1V53.45l2.3-.5c7.4-1.7 42.7-1 53 1Z" fill="#fff" />
							<path fillRule="evenodd" clipRule="evenodd" d="M104.811 35.55c-4 .9-6.9 4.1-10.7 11.9-1.5 3-3 5.7-3.3 6-.3.3-1.4 2.5-2.5 5-1 2.5-2.8 6.7-4 9.5-12.7 29.3-19.1 69.6-16.6 105.5 1.1 16.8 6.6 47.2 9.6 53 .7 1.4 2 5.2 2.9 8.5 1 3.3 3.1 8.8 4.7 12.3 1.6 3.4 2.9 6.6 2.9 7 0 1.6 8.3 16.7 11.2 20.4 6.6 8.5 20.3 6.9 27.2-3 4.2-6.1 3.6-10.6-3-24.1-15.6-32.1-22.5-64.7-21.1-99.6.4-8.3 1.2-17.9 1.7-21.5 1.4-8.7 7.7-33.6 9.4-36.9.7-1.4 2.1-5.1 3.1-8.1s2.8-7.5 4.1-10c4.7-9.5 7.4-16.4 7.4-19.1 0-2.7-2.8-8.6-5.9-12.3-3.4-3.9-10.8-5.9-17.1-4.5ZM161.711 65.55c-4.2 1.6-14.5 22.9-19.6 40.7-5.5 19.3-7.3 31.8-7.3 51.7 0 12 2.4 33.6 4.4 39.7.8 2.3 2.2 7.2 3.1 10.8 1.9 7.5 5.6 16.6 12.1 29.6 5.3 10.6 7.6 12.4 15.7 12.4 4.7 0 6.2-.5 9.9-3.3 8.8-6.7 9.6-14.3 2.9-27.7-7.1-14.1-10.8-24.9-13.7-39.5-2.3-12.1-2.6-15.5-2.1-26.5.9-21 6-40.1 15.8-58.9 5.2-9.9 4.4-19.6-2.3-25.8-4.4-4.1-12.6-5.5-18.9-3.2ZM1143.81 78.35c-30.9 8.1-51.3 27.5-62.7 59.6l-2.8 8v38.5c0 37.3.7 48.6 3.5 53.8.4 1 1.8 4.6 3 8 3.9 11.4 9.7 20 21.2 31.3 10.5 10.4 21.5 16.7 37.3 21.2 5.4 1.5 49.6 1.5 55 0 31.6-9.1 50.7-27.6 60.9-59l3.6-11.3.2-37.2.2-37.3-3.2-11.4c-3-10.3-9.6-25.3-12.6-28.4-.6-.7-1.9-2.5-2.9-4-7.5-11.6-27.5-25.7-43.1-30.2-9.6-2.8-21.1-4.3-34.1-4.3-11.2-.1-14.5.3-23.5 2.7Zm43.5 46.7c8.2 3.9 17.7 13.5 20.3 20.5 3.8 10.4 4.2 15.3 3.9 47.9-.4 35.2-.5 36.2-8.2 46.8-4.3 6-8.4 9.3-16.6 13.2-20.1 9.5-43.9.4-55.1-21.1l-3.3-6.4v-73l3.1-6.6c3.8-8 9.1-14.1 16.3-18.7 7.7-4.9 12.9-6.2 24.1-5.8 8 .2 10.4.7 15.5 3.2ZM753.811 77.45c-12.3.9-35.3 4.3-39.2 5.9-1.2.6-5.7 1.7-9.8 2.6-7.7 1.7-11 3.2-14.5 6.9-2 2-2 3.6-2.3 100.6l-.2 98.5 3 3.2c3.8 4 8.6 4.7 29.1 4.1 14.7-.4 15-.5 17.7-3.1l2.7-2.7.5-84.8.5-84.7 7-1.2c3.9-.7 16.5-1.7 28-2.3 11.6-.7 22-1.7 23.2-2.3 3.5-1.6 4.2-6.2 3.3-21.9-.9-15.4-1.3-17.3-3.8-18.4-2.5-1.1-32-1.3-45.2-.4ZM1337.11 79.05c-13 2.8-26.7 12.6-34.7 24.7-1.9 2.9-4.6 9.2-6.1 14.1-2.3 7.7-2.7 10.2-2.3 18 .6 11.1 3.9 21.7 9.7 30.3 4.9 7.5 7.5 9.7 23.6 20.5 17.8 12 35.7 23.8 36.2 23.8.3 0 16.4 10.6 26.5 17.4 5 3.4 7 6.8 7.6 12.6.3 3.8-.1 5.7-1.9 9-3.1 5.5-7 7.7-16 9.1-10.7 1.7-37.1.6-47.9-2-22.8-5.4-26.7-6.2-30-5.9l-3.5.3v14.5c0 9.7.4 15.5 1.3 17.6 2 4.6 10.7 8.4 35.2 15.1 8.6 2.4 50.7 3 62.5.9 17.2-2.9 29.9-10 39.8-22.1 14-17.3 17.2-40.1 8.3-60.6-6.8-15.6-13.4-21.5-47.7-42.4-8.8-5.4-26.6-16.4-31.4-19.5-3.3-2.2-7.7-4.9-9.8-6-5.4-3-9.5-7.7-9.9-11.3-.9-8.8 3.4-14.6 13.2-18 5.8-2.1 23.2-2.5 31-.7 2.5.5 10.1 1.8 17 2.9 6.9 1.1 16 3.1 20.3 4.5 4.3 1.4 9.3 2.6 11.1 2.6 2.9 0 3.6-.5 4.5-3.1 1.4-4 1.4-26.6.1-30.5-1.2-3.5-5.7-5.7-21.6-10.8-16.8-5.3-28.3-6.6-55.5-6.5-15.7.1-25.5.6-29.6 1.5ZM596.711 80.15c-1.5.2-3.5 1.3-4.5 2.5-1.8 1.9-1.9 6.2-1.9 107.4v105.3l2.3 2.3c2.2 2.3 2.7 2.3 24.3 2.3 21.4 0 22.1-.1 23.8-2.2 2.3-2.8 3.1-28.8 3.1-106.9 0-78.8-.8-105.9-3.1-108.7-1.7-2.1-2.5-2.2-21.6-2.4-10.9 0-21 .1-22.4.4ZM222.511 94.45c-3.3 1-5.3 3.2-11.4 12.5-11.2 17-15.3 30.5-15.3 50.5 0 15.8 1.8 23.8 8.7 37.8 6.8 13.9 13.4 22.9 18.2 24.9 7.7 3.2 18.6-.2 22.7-7.2 2.2-3.6 2.3-12.5.3-15.3-7.2-9.9-10.6-15.6-12.8-21.6-2.2-6.1-2.5-8.8-2.5-18.6 0-8 .5-13.1 1.7-16.9 1.7-5.4 7.3-16.2 11.1-21.4 3.1-4.3 2.8-12.4-.7-17-5-6.5-13.4-9.8-20-7.7Z" fill="#fff" />
						</svg>
						<h4 className="font-semibold text-xl uppercase">Buy Tickets</h4>
						<p className="text-base">Scan the QR code using a mobile device</p>
					</div>

				</div>
				<p className="text-center mt-16"><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">QR Code Not Working? Visit Airdosh</a></p>
			</Section>
			<Section id="faq" label="Frequently asked questions about the Jbay Surf Festival" title="FAQ" rotate="-rotate-1 mb-8 lg:mb-16">
				<Accordion faqs={faqs} />
			</Section>
			<Section id="sponsors" label="Our Sponsors" title="Sponsors" rotate="rotate-1 mb-8 lg:mb-16 mt-6">
				<div className="grid grid-cols-2 md:grid-cols-4">
					{sponsors && sponsors.map((item) => {
						return (
							<div key={`sponsor-${item.id}`}>
								<a className="block" href={item.link} target="_blank" rel="noreferrer">
									<Image className="grayscale mx-auto hover:grayscale-0 transition-all" src={item.image} alt={item.name} width={151} height={151} />
								</a>
								<h3 className="sr-only">{item.name}</h3>
							</div>
						);
					})}
				</div>
			</Section>
		</>
	)
}
