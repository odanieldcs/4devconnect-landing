import type { Meta, StoryObj } from '@storybook/react';
import { About } from './about';

const meta: Meta<typeof About> = {
	title: 'Sections/About',
	component: About,
	render: () => <About />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {
	args: {},
};
