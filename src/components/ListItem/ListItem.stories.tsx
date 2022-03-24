import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem, ListItemProps } from './ListItem'

export default {
  title: 'v1/ListItem',
  component: ListItem,
  argTypes: {
    visibleButton: { control: 'boolean' }
  }
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args: ListItemProps) => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  listBlocks: [
    {
      header: 'Nombre archivo',
      description: 'bla bla bla'
    },
    {
      header: 'Total artículos',
      description: 'bla bla bla'
    },
    {
      header: 'Peso',
      description: 'bla bla bla'
    },
    {
      header: 'Errores',
      description: 'bla bla bla'
    }
  ],
  visibleButton: true,
  onClick: () => {console.log('presionado')}
}