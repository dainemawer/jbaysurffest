/*
 * Raffle
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Raffle(): JSX.Element {

	return (
		<>
			<NextSeo
				title="Raffle"
			/>
			<div className="page-container">
				<h1 className="page-title">Raffle</h1>
				<Image sizes="(max-width: 500px) 500px, (max-width: 1023px) 959, 1000px" className="my-8 mx-auto" src="/images/raffle.jpg" alt="Girl holding raffle tickets" width="1000" height="667" />
				<h2 className="text-lg lg:text-2xl text-black text-center leading-tight uppercase font-extrabold mb-12">Enter the JBay Surf Festival Raffle for a Chance to Win Amazing Prizes!</h2>

				<p>Welcome to the JBay Surf Festival Raffle! We are thrilled to offer you the opportunity to participate in an exciting raffle that adds even more excitement to your festival experience. By participating, you not only stand a chance to win fantastic prizes but also contribute to the festival&apos;s success and support its future endeavors. Read on to learn more about the raffle, how to enter, and the incredible prizes that await lucky winners.</p>

				<h3 className="terms-heading">How to Enter:</h3>

				<p className="page-paragraph">Participating in the JBay Surf Festival Raffle is quick and easy. Here&apos;s what you need to do:</p>

				<ol className="list-decimal">
					<li className="mb-4 last:mb-0 ml-4 text-lg">Purchase Raffle Tickets: Visit our official festival website or designated ticketing partners to purchase your raffle tickets. Tickets are affordably priced, and the proceeds go towards supporting the festival and its initiatives.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Provide Your Details: Fill out the required information during the ticket purchase process, ensuring that your contact details are accurate so we can notify you if you win.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Keep Your Ticket Safe: Upon completing your purchase, you will receive a unique raffle ticket number. Hang on to it securely, as this will be your entry into the drawing.</li>
				</ol>


				<h3 className="terms-heading">The Prizes:</h3>

				<p className="page-paragraph">We&apos;ve assembled an incredible array of prizes that will leave you in awe. By participating in the JBay Surf Festival Raffle, you could be one of the lucky winners to walk away with:</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">Surfboard of Your Dreams: Win a high-performance surfboard from a renowned surfboard shaper, customized to suit your style and skill level. Feel the thrill of riding the waves on a board designed just for you.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">VIP Festival Experience: Immerse yourself in the festival atmosphere with an exclusive VIP experience. This prize package includes backstage access, premium seating for surf competitions, meet-and-greet opportunities with pro surfers, and much more.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Travel and Accommodation Package: Embark on an unforgettable adventure with a travel and accommodation package. Whether it&apos;s a surf trip to a tropical paradise or a weekend getaway to a surf destination, this prize will take you to incredible surfing locations.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Surf Gear and Accessories: Win a collection of top-quality surf gear and accessories from leading brands. From wetsuits and board bags to surf apparel and accessories, this prize will ensure you&apos;re equipped with the best gear on your next surf session.</li>

					<li className="mb-4 last:mb-0 ml-4 text-lg">Local Experiences: Discover the beauty of Jeffreys Bay and its surrounding areas with a selection of unique local experiences. This prize includes activities such as wildlife safaris, coastal hikes, cultural tours, and more, allowing you to explore the region beyond the waves.</li>
				</ul>


				<h3 className="terms-heading">Terms and Conditions:</h3>

				<p className="page-paragraph">
					The JBay Surf Festival Raffle is open to participants who meet the legal age requirements according to their jurisdiction.
					Raffle tickets are non-refundable and cannot be exchanged or transferred.
				</p>

				<ul className="list-disc">
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						The raffle drawing will take place at the festival&apos;s closing ceremony, and winners will be notified using the contact information provided during ticket purchase.
						Winners must claim their prizes within a specified time frame. Failure to do so may result in the selection of an alternate winner.
					</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Prizes are subject to availability and may be substituted with similar items if necessary.
					</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						The JBay Surf Festival and its organizers are not responsible for any travel or related expenses incurred by winners in claiming their prizes. Don&apos;t miss out on this incredible opportunity to win fantastic prizes while supporting the JBay Surf Festival.
					</li>
					<li className="mb-4 last:mb-0 ml-4 text-lg">
						Purchase your raffle tickets now and join us for an unforgettable celebration of surf culture, thrilling competitions, and a chance to win big! Good luck!
					</li>
				</ul>

				<p className="text-center mt-8"><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">Buy A Raffle Ticket</a></p>
			</div>
		</>
	)
}
