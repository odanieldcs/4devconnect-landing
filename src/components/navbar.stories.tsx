import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
	title: 'Components/Navbar',
	component: Navbar,
	render: () => <Navbar />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
	args: {},
};
