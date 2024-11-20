import type { Meta, StoryObj } from '@storybook/react';
import { Sponsors } from './sponsors';

const meta: Meta<typeof Sponsors> = {
	title: 'Sections/Sponsors',
	component: Sponsors,
	render: () => <Sponsors />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Sponsors>;

export const Default: Story = {
	args: {},
};
