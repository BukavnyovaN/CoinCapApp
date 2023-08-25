import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    className: 'button-primary',
    description: 'Primary button!',
  },
};

export const Secondary: Story = {
  args: {
    className: 'button-secondary',
    description: 'Secondary button!',
  },
};

export const Delete: Story = {
  args: {
    className: 'button-delete',
    description: 'Delete button!',
  },
};
