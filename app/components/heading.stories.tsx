import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
	title: 'Components/Heading',
	component: Heading,
	render: (args) => <Heading {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
export const Default: StoryObj<typeof Heading> = {
	args: {
		children: 'Título!',
		level: 'h1',
	},
};
