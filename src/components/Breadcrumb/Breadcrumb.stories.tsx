// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    elements: { control: 'array' },
  },
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args: BreadcrumbProps) => (
  <Breadcrumb {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  elements: [
    { id: 1, label: 'Inicio', key: 'inicio' },
    { id: 2, label: 'Promociones', active: true, key: 'promotion' },
    { id: 3, label: 'Crear promocion', key: 'create-promotion' },
  ],
}
