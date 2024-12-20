import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ArrowIcon, TagIcon } from './icon';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	render: (args) => <Button {...args} />,
	decorators: [
		(Story) => (
			<div className="max-w-6xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Acessar o Google',
		href: 'https://google.com.br',
		target: '_blank',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Acessar o Google',
		href: 'https://google.com.br',
		target: '_blank',
		variant: 'secondary',
	},
};

export const SecondaryWithIcon: Story = {
	args: {
		children: 'Acessar o Google',
		href: 'https://google.com.br',
		target: '_blank',
		endElement: <ArrowIcon className="border-white" direction="right" />,
		variant: 'secondary',
	},
};

export const PrimaryWithIcon: Story = {
	args: {
		children: 'Inscreva-se agora mesmo!',
		href: 'https://google.com.br',
		target: '_blank',
		startElement: <TagIcon className="border-white" size={16} />,
	},
};
