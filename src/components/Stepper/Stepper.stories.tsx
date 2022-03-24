// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stepper, StepperProps } from './Stepper'

export default {
  title: 'V1/Stepper',
  component: Stepper,
  argTypes: {
    elements: { control: 'array' },
  },
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args: StepperProps) => (
  <Stepper {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  elements: [
    { id: 1 },
    { id: 2 },
    { id: 3, active: true },
  ],
}
