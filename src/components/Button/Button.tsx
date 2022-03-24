import React, { ButtonHTMLAttributes } from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'
import { Icon, Props as IconProps } from '../Icon/Icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tipo de boton
   */
  visualType?: 'default' | 'outline' | 'link';
  /**
   * Color que tendrá el boton
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Texto del boton
   */
  label?: string;
  /**
   * Icono del boton
   */
  icon?: IconProps['icon'];
  /**
   * Posicion del icono
   */
  iconPosition?: 'left' | 'right';
  /**
   * Click handler
   */
  onClick?: () => void;
}

export function Button({
  visualType = 'default',
  color = 'primary',
  label,
  icon,
  iconPosition='left',
  ...props
}: ButtonProps) {

  const buttonColor = `button__${color}`
  const buttonClass = `button__${visualType}`;
  const buttonIconOnly = label ?? 'icon-only';

  const flexDirection = iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row';

  return (
    <button
      type="button"
      className={['button', buttonClass, buttonColor, buttonIconOnly, flexDirection].join(' ')}
      {...props}
    >
      { icon && <Icon icon={icon} /> }
      { label }
    </button>
  )
}
