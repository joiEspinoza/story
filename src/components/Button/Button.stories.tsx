// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'V1/Button',
  component: Button,
  argTypes: {
    visualType: { control: 'select' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { visualType: 'default', label: 'Default' };

export const DefaultWithOtherColor = Template.bind({});
DefaultWithOtherColor.args = { visualType: 'default', color: 'secondary', label: 'Default with other color' };

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = { visualType: 'default', label: 'Default with icon', icon: 'CheckIcon' };

export const DefaultWithIconRight = Template.bind({});
DefaultWithIconRight.args = { visualType: 'default', label: 'Default with icon', icon: 'CheckIcon', iconPosition: 'right' };


export const DefaultIconOnly = Template.bind({});
DefaultIconOnly.args = { visualType: 'default', icon: 'CheckIcon' };

export const Outline = Template.bind({});
Outline.args = { visualType: 'outline', label: 'Outline' };

export const OutlineWithOtherColor = Template.bind({});
OutlineWithOtherColor.args = { visualType: 'default', color: 'success', label: 'Outline with other color' };

export const OutlineWithIcon = Template.bind({});
OutlineWithIcon.args = { visualType: 'outline', label: 'Outline with icon', icon: 'CheckIcon' };

export const OutlineIconOnly = Template.bind({});
OutlineIconOnly.args = { visualType: 'outline', icon: 'CheckIcon' };

export const Link = Template.bind({});
Link.args = { visualType: 'link', label: 'Link' };

export const LinkWithOtherColor = Template.bind({});
LinkWithOtherColor.args = { visualType: 'link', color: 'success', label: 'Link with other color' };

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = { visualType: 'link', label: 'Link with icon', icon: 'CheckIcon' };

export const LinkIconOnly = Template.bind({});
LinkIconOnly.args = { visualType: 'link', icon: 'CheckIcon' };
