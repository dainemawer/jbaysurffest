module.exports = {
	mode: 'jit',
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#458185',
				secondary: '#E78B5F',
				tertiary: '#D8D8D8'
			},
			fontFamily: {
				'dosis': ['Dosis', 'sans-serif'],
			},
			backgroundImage: {
				body: 'url("/bg-image.png")',
				header: 'url("/header-bg.png")',
				wave: 'url("/footer-bg-new-new.png")',
				airdosh: 'linear-gradient(to right, rgb(129, 181, 152), rgb(197, 164, 205));',
				highlight: 'linear-gradient(180deg,rgba(255,255,255,0) 60%, #E8C886 60%)',
				'highlight-transparent': 'linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(232, 199, 134, 0.61) 60%)'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		'@tailwindcss/forms',
		'@tailwindcss/typography',
		'@tailwindcss/aspect-ratio',
		'@tailwindcss/line-clamp',
		'@tailwindcss/container-queries'
	],
}
