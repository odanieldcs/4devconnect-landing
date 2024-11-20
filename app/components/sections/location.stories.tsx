import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { Location } from './location';

const meta: Meta<typeof Location> = {
	title: 'Sections/Location',
	component: Location,
	render: () => <Location />,
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
type Story = StoryObj<typeof Location>;

export const Default: Story = {
	args: {},
};
