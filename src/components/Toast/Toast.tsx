import React from "react"

// import '../../scss/base.scss'
import '../../styles/base.css'
import { Icon } from "../Icon/Icon"

export interface ToastProps {
  /**
   Posicion del toast
   */
  position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  /**
   Titulo
   */
  title: string
  /**
   Subtitulo
   */
  subtitle: string
  /**
   Visible
   */
  visible: boolean
}

// eslint-disable-next-line import/prefer-default-export
export function Toast({
  position = 'bottom-right',
  title = '',
  subtitle = '',
  visible = true
}:ToastProps) {
  const containerPosition = `toast-container-${position}`
  const containerVisible = `toast-container-${(visible ? 'show': 'hide')}`


  return (
    <div className={['toast-container', containerPosition, containerVisible].join(' ')}>
      <div className="icon-close">
        <Icon icon="CheckCircleIcon" />
      </div>
      <div className="info-container">
        <div className="info-icon">
          <Icon icon="CheckCircleIcon" />
        </div>
        <div className="info-details">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}