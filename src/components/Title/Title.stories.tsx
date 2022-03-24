// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Title, TitleProps } from './Title'

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    text: { control: 'text' },
    size: { control: 'radio' },
    height: { control: 'radio' },
  }
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args: TitleProps) => <Title {...args} />

export const ChangeSize = Template.bind({})
ChangeSize.args = { size: '4xl', text: '4XL title' }

export const ChangeHeight = Template.bind({})
ChangeHeight.args = { height: 'bold', text: 'Bold title' }