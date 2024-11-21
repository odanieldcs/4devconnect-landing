import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './hero';

const meta: Meta<typeof Hero> = {
	title: 'Sections/Hero',
	component: Hero,
	render: () => <Hero />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
	args: {},
};
