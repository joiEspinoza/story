import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FileUploader, FileUploaderProps } from './FileUploader'

export default {
  title: 'v1/FileUploader',
  component: FileUploader,
  argTypes: {
    labelButton: { control: 'text'},
    subtitle: { control: 'text' },
    title: { control: 'text' }
  }
} as ComponentMeta<typeof FileUploader>

export const Default: ComponentStory<typeof FileUploader> = (args: FileUploaderProps) => <FileUploader {...args} />

Default.args = {
  labelButton: 'Buscar archivo',
  subtitle: 'subtitulo',
  title: 'titulo'
}
