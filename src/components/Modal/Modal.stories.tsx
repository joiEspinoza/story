import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal, ModalProps } from './Modal'

export default {
  title: 'v1/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  body: (
    <div>
      <p>Hello World</p>
    </div>
  ),
  header: {
    title: 'Default Modal',
    customTitleClass:""
  },
}

export const WithStepper = Template.bind({})
WithStepper.args = {
  body: (
    <div>
      <p>Hello World</p>
    </div>
  ),
  header: {
    title: 'Default Modal',
    optionsStepper: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
    customTitleClass:""
  },
}

export const ActionButtons = Template.bind({})
ActionButtons.args = {
  body: (
    <div>
      <p>Hello World</p>
    </div>
  ),
  header: {
    title: 'Default Modal',
    buttons: [
      {
        label: 'Enviar solicitud',
      },
    ],
    customTitleClass:""
  },
}

export const multiTitle = Template.bind({})
multiTitle.args = {
  body: (
    <div>
      <p>Hello World</p>
    </div>
  ),
  header: {
    titles: [
      { text: 'Información' },
      { text: 'Carga de artículos', active: true },
    ],
    customTitleClass:""
  },
  
}

export const Centered = Template.bind({})
Centered.args = {
  body: (
    <div>
      <p>Hello World</p>
    </div>
  ),
  header: {
    title: 'Centered Modal',
    customTitleClass:""
  },
  
  fullscreen: false,
}
