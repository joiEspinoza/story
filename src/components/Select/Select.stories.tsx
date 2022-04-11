import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'

import { Select, SelectProps} from './Select'

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    label: { control: 'text'},
    placeholder: {control: 'text'},
    readonly: {control: 'boolean'},
    visualType: { control: 'select'},
    hasError: { control: 'boolean'}
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args: SelectProps) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select label',
  placeholder: 'Seleccionar',
  opciones: [
    {
      key: 1,
      labelOption: 'Elemento 1'
    },
    {
      key: 2,
      labelOption: 'Elemento 2'
    },
    {
      key: 3,
      labelOption: 'Elemento 3'
    }
  ],
  readonly: false
}

export const Badge = Template.bind({})
Badge.args = {
  opciones: [
    {
      key: 1,
      labelOption: 'Element 1'
    },
    {
      key: 2,
      labelOption: 'Element 2'
    }
  ],
  visualType: 'jumbo'
}

export const HasError = Template.bind({});
HasError.args = {
  label: 'Select label',
  placeholder: 'Seleccionar',
  opciones: [
    {
      key: 1,
      labelOption: 'Elemento 1'
    },
    {
      key: 2,
      labelOption: 'Elemento 2'
    },
    {
      key: 3,
      labelOption: 'Elemento 3'
    }
  ],
  hasError: true
}