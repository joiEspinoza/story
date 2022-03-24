import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HeaderUser, HeaderUserProps} from './HeaderUser'

export default {
  title: 'HeaderUser',
  component: HeaderUser,
  argTypes: {
    text: { control: 'text' }
  }
} as ComponentMeta<typeof HeaderUser>

const Template: ComponentStory<typeof HeaderUser> = (args: HeaderUserProps) => <HeaderUser {...args} />

export const Primary = Template.bind({});
Primary.args = {
  text: 'HT'
};