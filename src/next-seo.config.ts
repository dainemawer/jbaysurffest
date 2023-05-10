import { DefaultSeoProps } from 'next-seo';

const SITE_TITLE = 'My Site';
const SITE_DESCRIPTION = 'My site description';
const SITE_URL = 'https://mysite.com';
const SITE_IMAGE = '/opengraph.png';


const config: DefaultSeoProps = {
	title: SITE_TITLE,
	defaultTitle: 'My Awesome Website',
	description: SITE_DESCRIPTION,
	themeColor: '#000000',
	titleTemplate: '%s | Site Name',
	additionalLinkTags: [
		{
			rel: 'icon',
			href: '/icons/favicon.ico',
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-16.png',
			sizes: '16x16'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-32.png',
			sizes: '32x32'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-57.png',
			sizes: '57x57'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-60.png',
			sizes: '60x60'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-64.png',
			sizes: '64x64'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-70.png',
			sizes: '70x70'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-72.png',
			sizes: '72x72'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-76.png',
			sizes: '76x76'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-96.png',
			sizes: '96x96'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-114.png',
			sizes: '114x114'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-150.png',
			sizes: '150x150'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-152.png',
			sizes: '152x152'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-160.png',
			sizes: '160x160'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-180.png',
			sizes: '180x180'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-192.png',
			sizes: '192x192'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/favicon-310.png',
			sizes: '310x310'
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
				alt: 'Og Image Alt',
			},
		],
	}
};

export default config;
