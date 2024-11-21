import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	render: (args) => <Avatar {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-xl mx-auto flex items-center justify-center">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	args: {
		imageUri: 'http://localhost:6006/speaker/speaker-sample-1.jpg',
		name: 'Daniel Castro',
	},
};
