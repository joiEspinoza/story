import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio, RadioProps } from './Radio'

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    name: {control: 'text'},
    options: { control: 'array' },
  }
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args: RadioProps) => (
  <Radio {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: "Cartel",
  name: "cartel",
  options: [
    {
      label: 'Si',
      value: 'si'
    },
    {
      label: 'No',
      value: 'no'
    }
  ],
}