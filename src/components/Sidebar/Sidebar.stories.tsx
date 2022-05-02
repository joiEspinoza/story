// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar, SidebarProps } from './Sidebar'

export default {
  title: 'V1/Sidebar',
  component: Sidebar,
  argTypes: {
    footerText: { control: 'text' },
    labelCollapse: { control: 'text' }
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args: SidebarProps) => (
  <Sidebar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  mainButton: {
    label: 'Crear',
    icon: 'CheckCircleIcon',
    visualType: 'link',
    color: 'success',
  },
  menuElements: [
    {
      id: 1,
      label: 'Home',
      key: 'home',
      icon: 'HomeIcon',
    },
    { id: 2, label: 'Precios', key: 'precios', icon: 'CashIcon' },
    {
      id: 3,
      label: 'Mis solicitudes',
      key: 'mis-solicitudes',
      icon: 'CollectionIcon',
    },
    {
      id: 4,
      label: 'Promociones',
      key: 'promociones',
      icon: 'SpeakerphoneIcon',
      active: true,
      route: 'home'
    },
    { id: 5, label: 'Campañas', key: 'campanas' },
    { id: 6, label: '---', key: 'separator' },
    { id: 7, label: 'Ayuda / FAQ', key: 'faq', icon: 'CogIcon' },
  ],
  footerText: '© 2022 Cencosud',
  labelCollapse: 'Minimizar'
}

export const WithoutMainAction = Template.bind({})
WithoutMainAction.args = {
  menuElements: [
    { id: 1, label: 'Home', key: 'home', icon: 'HomeIcon' },
    { id: 2, label: 'Precios', key: 'precios', icon: 'CashIcon' },
    {
      id: 3,
      label: 'Mis solicitudes',
      key: 'mis-solicitudes',
      icon: 'CollectionIcon',
    },
    {
      id: 4,
      label: 'Promociones',
      key: 'promociones',
      icon: 'SpeakerphoneIcon',
      active: true,
    },
    { id: 5, label: 'Campañas', key: 'campanas' },
    { id: 6, label: '---', key: 'separator' },
    { id: 7, label: 'Ayuda / FAQ', key: 'faq', icon: 'CogIcon' },
  ],
  footerText: '© 2022 Cencosud',
  labelCollapse: 'Minimizar'
}

export const withSubMenus = Template.bind({})
withSubMenus.args = {
  mainButton: {
    label: 'Crear',
    icon: 'CheckCircleIcon',
    visualType: 'link',
    color: 'success',
  },
  menuElements: [
    { id: 1, label: 'Home', key: 'home', icon: 'HomeIcon' },
    { id: 2, label: 'Precios', key: 'precios', icon: 'CashIcon' },
    {
      id: 3,
      label: 'Mis solicitudes',
      key: 'mis-solicitudes',
      icon: 'CollectionIcon',
      items: [
        { id: 7, label: 'Crear campaña', key: 'crear-campana' },
        { id: 8, label: 'Editar campaña', key: 'editar-campana', active: true },
      ],
    },
    {
      id: 4,
      label: 'Promociones',
      key: 'promociones',
      icon: 'SpeakerphoneIcon',
    },
    { id: 5, label: 'Campañas', key: 'campanas' },
    { id: 6, label: '---', key: 'separator' },
    { id: 7, label: 'Ayuda / FAQ', key: 'faq', icon: 'CogIcon' },
  ],
  footerText: '© 2022 Cencosud',
  labelCollapse: 'Minimizar'
}
