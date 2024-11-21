import type { Meta, StoryObj } from '@storybook/react';
import { Subscribe } from './subscribe';

const meta: Meta<typeof Subscribe> = {
	title: 'Sections/Subscribe',
	component: Subscribe,
	render: () => <Subscribe />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Subscribe>;

export const Default: Story = {
	args: {},
};
