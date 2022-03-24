import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon, Props } from './Icon'

export default {
  title: 'V1/Icon',
  component: Icon,
  argTypes: {
    icon: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
    spinner: { control: 'boolean' },
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args: Props) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = { icon: 'ChartPieIcon' }

export const Outline = Template.bind({})
Outline.args = { icon: 'ChartPieIcon', outline: true }

export const Spinner = Template.bind({})
Spinner.args = { icon: 'CheckCircleIcon', spinner: true }