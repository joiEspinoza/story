import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Accordion, AccordionProps } from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text' }
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => <Accordion {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: <p>Body</p>,
  title: 'Accordion'
}