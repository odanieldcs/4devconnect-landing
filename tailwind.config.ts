import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-banner': "url('/hero-banner.jpg')",
				buidling: "url('/building.jpg')",
			},
			fontFamily: {
				sans: ['var(--font-poppins)'],
			},
			colors: {
				light: '#F3F3F3',
				secondary: '#4F4F54',
				primary: '#13141A',
				'orange-pink-light': '#F3EDEB',
				'orange-pink': '#F34B4B',
			},
			maxWidth: {
				'8xl': '88.25rem',
			},
			width: {
				18: '4.5rem',
			},
			height: {
				18: '4.5rem',
			},
		},
	},
	plugins: [],
} satisfies Config;
