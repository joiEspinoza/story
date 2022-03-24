import React from 'react'
import '../../styles/base.css'

export interface TitleProps {
  /**
  Tamaño del titulo
  */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /**
  Texto que contendrá el titulo
  */
  height?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /**
  Texto que contendrá el titulo
  */
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export function Title({
  size = 'xl',
  height = 'normal',
  text = 'Custom title',
}: TitleProps) {
  let titleSize
  let titleHeight

  switch(size) {
    case 'xs': titleSize = 'text-xs'; break;
    case 'sm': titleSize = 'text-sm'; break;
    case 'base': titleSize = 'text-base'; break;
    case 'lg': titleSize = 'text-lg'; break;
    case 'xl': titleSize = 'text-xl'; break;
    case '2xl': titleSize = 'text-2xl'; break;
    case '3xl': titleSize = 'text-3xl'; break;
    case '4xl': titleSize = 'text-4xl'; break;
    default: titleSize = 'text-xl';
  }

  switch(height) {
    case 'light': titleHeight = 'font-light'; break;
    case 'normal': titleHeight = 'font-normal'; break;
    case 'medium': titleHeight = 'font-medium'; break;
    case 'semibold': titleHeight = 'font-semibold'; break;
    case 'bold': titleHeight = 'font-bold'; break;
    default: titleHeight = 'font-normal';
  }

  const classTitle = `title-container ${titleHeight} ${titleSize}`

  return (
    <span className={classTitle}>{text}</span>
  )
}
