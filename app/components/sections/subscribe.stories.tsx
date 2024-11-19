import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { Subscribe } from './subscribe';

const meta: Meta<typeof Subscribe> = {
	title: 'Sections/Subscribe',
	component: Subscribe,
	render: () => <Subscribe />,
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
type Story = StoryObj<typeof Subscribe>;

export const Default: Story = {
	args: {},
};
