// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge, Props } from './Badge';

export default {
  title: 'V1/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: Props) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Primary badge', type: 'primary' };

export const Success = Template.bind({});
Success.args = { text: 'Success badge', type: 'success' };

export const Warning = Template.bind({});
Warning.args = { text: 'Warning badge', type: 'warning' };

export const Danger = Template.bind({});
Danger.args = { text: 'Danger badge', type: 'danger' };
