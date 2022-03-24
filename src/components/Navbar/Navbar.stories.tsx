import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navbar, NavbarProps } from './Navbar'

export default {
  title: 'v1/Navbar',
  component: Navbar,
  argTypes:{
    brandSelector: { control: 'select' },
    brandItems: {control: 'array' },
    navbarItems: { control: 'array' }
  }
} as ComponentMeta<typeof Navbar>

export const Primary: ComponentStory<typeof Navbar> = (args: NavbarProps) => <Navbar {...args} />

Primary.args = {
  title: 'Title',
  brandSelector: 'jumbo',
  brandItems:[{ key: 1, labelOption: 'jumbo' }],
  navbarItems: [
    { key: 1, icon: 'SwitchVerticalIcon', type: 'button', onClick:() => console.log('myTest') },
    { key: 2, icon: 'FilterIcon', type: 'button'},
    { key: 3, icon: 'TemplateIcon', type: 'button'},
    { key: 4, icon: 'DownloadIcon', type: 'button'},
    { key: 5, type: 'finder'}
  ]
}
