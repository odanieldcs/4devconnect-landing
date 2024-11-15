import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: {
		builder: {
			name: '@storybook/builder-vite',
			options: {
				viteConfigPath: require.resolve('../vite.config.storybook.ts'),
			},
		},
	},
};
export default config;
