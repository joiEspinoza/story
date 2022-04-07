// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo, LogoProps } from './Logo'

export default {
  title: 'V1/Logo',
  component: Logo,
  argTypes: {
    smileColor: { control: { type: 'color' } },
    circleColor: { control: { type: 'color' } },
    eyeColor: { control: { type: 'color' } },
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args: LogoProps) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = { };

export const Gray = Template.bind({})
Gray.args = { smileColor: '#111928', circleColor: '#9CA3AF', eyeColor: '#111928' };