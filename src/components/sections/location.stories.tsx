import type { Meta, StoryObj } from '@storybook/react';
import { Location } from './location';

const meta: Meta<typeof Location> = {
	title: 'Sections/Location',
	component: Location,
	render: () => <Location />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Location>;

export const Default: Story = {
	args: {},
};
