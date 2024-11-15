import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
	title: 'Components/Navbar',
	component: Navbar,
	render: () => <Navbar />,
	decorators: [
		(Story) => {
			const RemixStub = createRemixStub([
				{
					path: '/',
					Component: Story,
				},
			]);

			return <RemixStub />;
		},
	],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
	args: {},
};
