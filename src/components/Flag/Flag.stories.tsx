import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Flag, FlagProps } from './Flag'

export default {
  title: 'Flag',
  component: Flag
} as ComponentMeta<typeof Flag>

const Template: ComponentStory<typeof Flag> = (args: FlagProps) => <Flag {...args} />

export const Primary = Template.bind({});
Primary.args = { country: 'cl' };