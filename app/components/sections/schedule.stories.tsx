import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { Schedule } from './schedule';
import { talks } from '~/config';

const meta: Meta<typeof Schedule> = {
	title: 'Sections/Schedule',
	component: Schedule,
	render: (args) => <Schedule {...args} />,
	decorators: [
		(Story) => {
			const RemixStub = createRemixStub([
				{
					path: '/',
					Component: Story,
				},
			]);

			return (
				<div className="max-w-6xl mx-auto">
					<RemixStub />
				</div>
			);
		},
	],
};

export default meta;
type Story = StoryObj<typeof Schedule>;

export const Default: Story = {
	args: {
		talks,
	},
};
