import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navbar, NavbarProps } from './Navbar'

export default {
  title: 'v1/Navbar',
  component: Navbar,
  argTypes: {
    title: { control: 'string'},
    brandItems: { control: 'array'},
    navbarButtons: { control: 'array'},
    finder: { control: 'boolean'}
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: NavbarProps) => <Navbar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Navbar Title',
  brandItems: [
    { key: 1, labelOption: 'Jumbo', active: true },
    { key: 2, labelOption: 'SISA' },
  ],
  navbarButtons: [
    { key: 1, icon: 'SwitchVerticalIcon' },
    { key: 2, icon: 'FilterIcon' },
    { key: 3, icon: 'TemplateIcon' },
    { key: 4, icon: 'DownloadIcon' },
  ],
  finder: true,
}

export const SingleBrand = Template.bind({})
SingleBrand.args = {
  title: 'Navbar Title',
  brandItems: [
    { key: 1, labelOption: 'Jumbo' },
  ],
  navbarButtons: [
    { key: 1, icon: 'SwitchVerticalIcon' },
    { key: 2, icon: 'FilterIcon' },
    { key: 3, icon: 'TemplateIcon' },
    { key: 4, icon: 'DownloadIcon' },
  ],
  finder: true,
}

export const WithoutFinder = Template.bind({})
WithoutFinder.args = {
  title: 'Navbar Title',
  brandItems: [
    { key: 1, labelOption: 'Jumbo' },
  ],
  navbarButtons: [
    { key: 1, icon: 'SwitchVerticalIcon' },
    { key: 2, icon: 'FilterIcon' },
    { key: 3, icon: 'TemplateIcon' },
    { key: 4, icon: 'DownloadIcon' },
  ],
  finder: false,
}

export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  navbarButtons: [
    { key: 1, icon: 'SwitchVerticalIcon' },
    { key: 2, icon: 'FilterIcon' },
    { key: 3, icon: 'TemplateIcon' },
    { key: 4, icon: 'DownloadIcon' },
  ],
  finder: true,
}