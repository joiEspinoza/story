import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Finder, FinderProps } from './Finder'

export default {
  title: 'v1/Finder',
  component: Finder,
  argTypes: {
    placeholder: { control: 'text' }
  }
} as ComponentMeta<typeof Finder>

const Template: ComponentStory<typeof Finder> = (args: FinderProps) => <Finder {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Buscar'
}