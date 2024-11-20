import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-banner': "url('/hero-banner.jpg')",
			},
			fontFamily: {
				sans: [
					'Poppins',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
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
