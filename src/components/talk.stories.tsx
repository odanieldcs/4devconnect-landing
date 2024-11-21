import type { Meta, StoryObj } from '@storybook/react';
import { Talk } from './talk';

const meta: Meta<typeof Talk> = {
	title: 'Components/Talk',
	component: Talk,
	render: (args) => <Talk {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-2xl h-60 mx-auto flex items-center justify-center bg-white">
				<Story />
			</div>
		),
	],
	argTypes: {
		position: {
			control: {
				type: 'select',
				options: ['start', 'middle', 'end', 'none'],
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Talk>;

export const Default: Story = {
	args: {
		description: 'A talk about something',
		title: 'Talk Title',
		time: '10:00',
		speaker: {
			avatar: 'http://localhost:6006/speaker/speaker-sample-1.jpg',
			company: 'DDEVs',
			linkedin: 'https://linkedin.com/in/ddevs',
			name: 'Daniel Castro',
			role: 'Full Stack Software Engineer',
		},
	},
};

export const NoDescriptionAndSpeaker: Story = {
	args: {
		title: 'Início do Credenciamento',
	},
};
