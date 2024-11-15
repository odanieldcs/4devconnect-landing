import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
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
				'gray-light': '#F3F3F3',
				'gray-secondary': '#4F4F54',
				'gray-primary': '#13141A',
				'orange-pink-light': '#F3EDEB',
				'orange-pink-primary': '#F34B4B',
			},
			maxWidth: {
				'8xl': '88.25rem',
			},
		},
	},
	plugins: [],
} satisfies Config;
