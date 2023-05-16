import { DefaultSeoProps } from 'next-seo';

const SITE_TITLE = 'J-Bay Surf Festival';
const SITE_DESCRIPTION = 'Welcome to the annual J-Bay Surf Festival 2023';
const SITE_URL = 'https://jbaysurffest.co.za';
const SITE_IMAGE = 'https://jbaysurffest.co.za/opengraph.jpg';


const config: DefaultSeoProps = {
	title: SITE_TITLE,
	defaultTitle: SITE_TITLE,
	description: SITE_DESCRIPTION,
	themeColor: '#e7b078',
	titleTemplate: `%s | ${SITE_TITLE}`,
	additionalLinkTags: [
		{
			rel: 'icon',
			href: '/icons/favicon.ico',
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-touch-icon.png',
		},
	],
	openGraph: {
		type: 'website',
		description: SITE_DESCRIPTION,
		locale: 'en_ZA',
		url: SITE_URL,
		siteName: SITE_TITLE,
		images: [
			{
				url: SITE_IMAGE,
				width: 800,
				height: 600,
				alt: 'Illustrated ocean with a saxophone riding a surfboard and an Aloe plant on an island.',
			},
		],
	},
	twitter: {
		handle: '@jbaysurffest',
		site: '@jbaysurffest',
		cardType: 'summary_large_image',
	}
};

export default config;
