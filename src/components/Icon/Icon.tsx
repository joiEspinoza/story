import React from 'react'
import * as SolidIcons from '@heroicons/react/solid';
import * as OutlineIcons from '@heroicons/react/outline';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

export interface Props {
  icon: IconName;
  outline?: boolean;
  spinner?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Icon = (props: Props): JSX.Element => {
  
  const { icon, outline = false, spinner = false, size = 'md'} = props;

  const iconSpin = spinner ? 'animate-spin' : '';

  let iconSize;
  switch(size)
  {
    case 'sm':
      iconSize = 'w-4 h-4';
      break;
    case 'md':
      iconSize = 'w-6 h-6';
      break;
    case 'lg':
      iconSize = 'w-8 h-8';
      break;
    case 'xl':
      iconSize = 'w-12 h-12';
      break;
    default:
      iconSize = 'w-6 h-6';
      break;
  }

  const IconToShow = outline ? OutlineIcons[icon] : SolidIcons[icon];

  return <IconToShow className={[iconSize, iconSpin].join(' ')} />;
};