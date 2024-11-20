import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { Hero } from './hero';

const meta: Meta<typeof Hero> = {
	title: 'Sections/Hero',
	component: Hero,
	render: () => <Hero />,
	decorators: [
		(Story) => {
			const RemixStub = createRemixStub([
				{
					path: '/',
					Component: Story,
				},
			]);

			return (
				<div className=" mx-auto">
					<RemixStub />
				</div>
			);
		},
	],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
	args: {},
};
