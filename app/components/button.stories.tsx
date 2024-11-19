import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { Button } from './button';
import { ArrowIcon, TagIcon } from './icon';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	render: (args) => <Button {...args} />,
	decorators: [
		(Story) => {
			const RemixStub = createRemixStub([
				{
					path: '/',
					Component: Story,
				},
			]);

			return (
				<div className="max-w-xl mx-auto flex items-center justify-center">
					<RemixStub />
				</div>
			);
		},
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
