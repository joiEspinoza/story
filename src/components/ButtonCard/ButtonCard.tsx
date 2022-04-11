import React from 'react'

import '../../styles/base.css'
import { Icon, Props as IconProps } from '../Icon/Icon'

export type ButtonCardProps = {
  /*
   * Texto del titulo
   */
  title: string
  /*
  * Texto del subtitulo
  */
  subtitle: string
  /*
  * Icono del boton
  */
  icon: IconProps['icon']
  /*
   * Evento OnClick
   * */
  onClick?: () => void
}

export const ButtonCard = ({ title, subtitle, icon, ...props }: ButtonCardProps) => (
  <div className="buttonCard-container" {...props} >
    <div className="buttonCard-icon">
      <Icon icon={icon} />
    </div>
    <div className="buttonCard-title">{title}</div>
    <div className="buttonCard-subtitle">{subtitle}</div>
  </div>
)

ButtonCard.defaultProps = {
  onClick: () => { },
}