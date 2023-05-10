// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	productionBrowserSourceMaps: true,
	experimental: {
		webVitalsAttribution: ['CLS', 'LCP']
	}
}

module.exports = nextConfig
