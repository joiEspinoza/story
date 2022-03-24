// Button.stories.ts|tsx
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Notification, NotificationProps } from './Notification'

export default {
  title: 'V1/Notification',
  component: Notification,
  argTypes: {
    hasNotifications: { control: { type: 'boolean' } },
  }
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = (args: NotificationProps) => <Notification {...args} />

export const WithNotification = Template.bind({})
WithNotification.args = { hasNotifications: true }

export const WithoutNotification = Template.bind({})
WithoutNotification.args = { hasNotifications: false }