import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './paragraph';

const meta: Meta<typeof Paragraph> = {
	title: 'Components/Paragraph',
	component: Paragraph,
	render: (args) => <Paragraph {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl text-center mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;

export const Default: StoryObj<typeof Paragraph> = {
	args: {
		children: 'Texto do parágrafo!',
	},
};
