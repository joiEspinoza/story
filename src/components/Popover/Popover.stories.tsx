// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Popover, Props } from './Popover'

export default {
  title: 'V1/Popover',
  component: Popover,
  argTypes: {
    isOpen: { control: 'boolean' },
    position: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args: Props) => (
  <Popover {...args} />
)

export const primary = Template.bind({})
primary.args = {
  text: 'Descargar planilla de artículos',
  buttons: [
    { label: 'Descargar errores', color: 'primary' },
    { label: 'Descargar todo', color: 'secondary' },
  ],
}

export const WithoutButtons = Template.bind({})
WithoutButtons.args = {
  text: 'Esto es un popover',
}

export const WithoutText = Template.bind({})
WithoutText.args = {
  buttons: [
    { label: 'Descargar errores', color: 'primary' },
    { label: 'Descargar todo', color: 'secondary' },
  ],
}