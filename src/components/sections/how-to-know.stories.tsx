import type { Meta, StoryObj } from '@storybook/react';
import { HowToKnow } from './how-to-know';

const meta: Meta<typeof HowToKnow> = {
	title: 'Sections/HowToKnow',
	component: HowToKnow,
	render: () => <HowToKnow />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof HowToKnow>;

export const Default: Story = {
	args: {},
};
