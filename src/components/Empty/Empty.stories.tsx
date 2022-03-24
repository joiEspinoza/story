import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Empty, EmptyProps } from './Empty'

export default {
  title: 'v1/Empty',
  component: Empty
} as ComponentMeta<typeof Empty>

export const Promotion: ComponentStory<typeof Empty> = (args: EmptyProps) => <Empty {...args} />

Promotion.args = {
  image: 'promotion'
}
