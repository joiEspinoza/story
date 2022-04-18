import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header, HeaderProps } from './Header'

export default {
  title: 'V1/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => <Header {...args} />

export const Default = Template.bind({});
Default.args = {
  title: 'Price & Promotions',
  userAbbreviation: 'PS'
};
