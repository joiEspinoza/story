// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    picture: { control: 'text' },
    user: { control: 'text' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = { picture: 'https://picsum.photos/200', user: 'Juan Perez' };

export const NoPicture = Template.bind({});
NoPicture.args = { user: 'Juan Perez' };
