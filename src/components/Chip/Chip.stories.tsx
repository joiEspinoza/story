import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Chip, ChipProps } from './Chip'

export default {
  title: 'V1/Chip',
  component: Chip,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args: ChipProps) => (
  <Chip {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Chip de prueba',
  chips: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4' },
  ],
  onChange: (e:any) => console.log(e)
}
