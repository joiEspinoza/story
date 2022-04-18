// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateTimePicker, Props } from './DateTimePicker';

export default {
  title: 'V1/DateTimePicker',
  component: DateTimePicker,
  argTypes: {
    label: { control: 'string' },
    required: { control: 'boolean' },
    hasError: { control: 'boolean' },
    onlyDate: { control: 'boolean' },
  }
} as ComponentMeta<typeof DateTimePicker>;

const Template: ComponentStory<typeof DateTimePicker> = (args:Props) => <DateTimePicker {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Fecha y hora de vigencia', required: true, hasError: false };

export const OnlyDate = Template.bind({});
OnlyDate.args = { 
  label: 'Fecha', 
  required: true, 
  hasError: false,
  onlyDate: true 
};