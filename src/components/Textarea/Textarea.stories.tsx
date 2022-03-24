// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea, Props } from './Textarea';

export default {
  title: 'V1/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    readonly: { control: 'boolean' }
  }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: Props) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary Label', placeholder: 'Primary Placeholder' };

export const Disabled = Template.bind({});
Disabled.args = { label: 'Primary Label', placeholder: 'Primary Placeholder', disabled: true };
