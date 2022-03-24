// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo, LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    textColor: { control: { type: 'color' } },
    circleColor: { control: { type: 'color' } },
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args: LogoProps) => <Logo {...args} />

export const Gray = Template.bind({})
Gray.args = { textColor: '#111928', circleColor: '#9CA3AF' };

export const CustomColor = Template.bind({})
CustomColor.args = { textColor: '#ff0000', circleColor: '#00ff00' };