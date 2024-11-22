import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './dialog';
import { Paragraph } from './paragraph';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  render: (args) => <Dialog {...args} />,
  decorators: [
    (Story) => (
      <div className="max-w-6xl mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;
export const Default: StoryObj<typeof Dialog> = {
  args: {
    children: <Paragraph>Dialog</Paragraph>,
    isOpen: false,
  },
};
