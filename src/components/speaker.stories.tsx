import type { Meta, StoryObj } from '@storybook/react';
import { Speaker } from './speaker';

const meta: Meta<typeof Speaker> = {
	title: 'Components/Speaker',
	component: Speaker,
	render: (args) => <Speaker {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-lg mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Speaker>;

export const Default: Story = {
	args: {
		avatar: 'http://localhost:6006/speaker/speaker-sample-1.jpg',
		company: 'DDEVs',
		linkedin: 'https://linkedin.com/in/ddevs',
		name: 'Daniel Castro',
		role: 'Full Stack Software Engineer',
	},
};
