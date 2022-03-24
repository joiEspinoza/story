import React from 'react'
import { ComponentMeta, ComponentStory} from '@storybook/react'
import { Toast, ToastProps } from './Toast'

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    position: {control: 'select'},
    title: {control: 'text'},
    subtitle: {control: 'text'},
    visible: {control: 'boolean'}
  }
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args:ToastProps) => <Toast {...args} />
export const Primary = Template.bind({})

Primary.args = {
  position: 'bottom-right',
  title: 'Titulo', 
  subtitle: 'Subtitulo',
  visible: true
}