// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image, imageProps } from './Image';

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: imageProps) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = { src: 'https://picsum.photos/200', alt: 'A random image' };
