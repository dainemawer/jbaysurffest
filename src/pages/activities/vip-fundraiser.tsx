/*
 * VIP Fundraiser
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function VIPFundraiser(): JSX.Element {

	return (
		<>
			<NextSeo
				title="VIP Fundraiser"
			/>
			<div className="page-container">
				<h1 className="page-title">VIP Fundraiser</h1>
				<Image className="my-8 mx-auto" sizes="(min-width: 1200px) 70vw, (min-width: 768) 40vw, 100vw" src="/images/fundraiser.jpg" alt="A dinner table on the beach" width="1000" height="667" />

				<p>Welcome to the exclusive VIP Fundraiser event at the Jbay Surf Festival! We are delighted to invite you to an unforgettable evening of surf, music, and philanthropy. As you soak in the vibrant atmosphere of the festival, your presence here holds special significance as it directly contributes to the Jbay Surf Foundation&pos;s mission of empowering the youth of Jeffreys Bay.</p>

				<p>Join us for an evening filled with surf-inspired delights and entertainment, all in support of this remarkable organization. As a VIP guest, you will have access to an array of exclusive experiences that will make your night truly memorable. From premium seating to unparalleled views of the live surf competition, you will witness the world&pos;s best surfers carve the waves of Jeffreys Bay with their exceptional skills.</p>

				<p>Indulge in a delectable selection of gourmet cuisine and sip on handcrafted cocktails as you mingle with like-minded individuals who share a passion for both surfing and giving back to the community. Engage in lively conversations with renowned surfers, influential figures, and members of the Jbay Surf Foundation, all of whom have made a significant impact on the lives of aspiring young surfers.</p>

				<p>But the excitement doesn&pos;t end there. Throughout the evening, enjoy live performances by acclaimed musicians, adding a rhythm and energy that perfectly complements the spirit of the festival. Immerse yourself in the contagious enthusiasm and celebrate the transformative power of surfing as a tool for positive change.</p>
				<p>As a VIP Fundraiser event, your attendance directly contributes to the Jbay Surf Foundation&pos;s initiatives, providing underprivileged youth with access to surfing equipment, coaching programs, educational support, and invaluable life skills. By joining us tonight, you are making a tangible difference in the lives of these aspiring surfers, offering them a chance to thrive and grow through the sport they love.</p>

				<p>We extend our deepest gratitude to each and every one of you for your support and commitment to the Jbay Surf Foundation. Together, let&pos;s create waves of change and empower the youth of Jeffreys Bay to ride towards a brighter future.</p>

				<p className="text-center mt-8"><a className="page-hyperlink" href="https://airdosh.co.za" target="_blank" rel="noreferrer">Buy A VIP Ticket</a></p>
			</div>
		</>
	)
}
