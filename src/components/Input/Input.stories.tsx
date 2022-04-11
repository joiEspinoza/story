// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'V1/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    readonly: { control: 'boolean' }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary Label', placeholder: 'Primary Placeholder' };

export const HasError = Template.bind({});
HasError.args = { label: 'Error Label', placeholder: 'Error Placeholder', hasError: true };

export const HasWarning = Template.bind({});
HasWarning.args = { label: 'Warning Label', placeholder: 'Warning Placeholder', hasWarning: true };