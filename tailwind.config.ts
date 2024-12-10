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
		safelist: [
		'left-[-1rem]',
		'left-[2rem]',
		'left-[4.4rem]',
		'left-[7rem]',
		'left-[9.3rem]',
		'left-[12rem]',
		'left-[14.5rem]',
		'left-[17rem]',
		'left-[19rem]',
		'z-[60]',
		'z-[59]',
		'z-[58]',
		'z-[57]',
		'z-[56]',
		'z-[55]',
		'z-[54]',
		'z-[53]',
		'z-[52]',
		],
	plugins: [],
} satisfies Config;
