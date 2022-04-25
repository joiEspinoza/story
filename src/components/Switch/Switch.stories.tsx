import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch, Props } from './Switch'

export default {
  title: 'V1/Switch',
  component: Switch,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  }
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args: Props) => (
  <Switch {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: "Switch",
}

export const Checked = Template.bind({})
Checked.args = {
  label: "Switch checked",
  checked: true
}
