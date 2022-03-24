import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ButtonCard, ButtonCardProps } from './ButtonCard'

export default {
  title: 'V1/Button Card',
  component: ButtonCard
} as ComponentMeta<typeof ButtonCard>

const Template: ComponentStory<typeof ButtonCard> = (args: ButtonCardProps) => <ButtonCard {...args} />

export const Primary = Template.bind({});
Primary.args = { icon: 'CogIcon', title: 'Carga Masiva' };

export const WithSubtitle = Template.bind({});
WithSubtitle.args = { icon: 'CogIcon', title: 'Carga Masiva', subtitle: 'Carga articulos a traves del formulario' };