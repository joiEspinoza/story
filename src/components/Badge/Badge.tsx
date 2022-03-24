import React from 'react'

import '../../styles/base.css'

export interface Props {
  /**
  Texto a desplegar
  */
  text: string
  /**
   * Tipo de badge
   */
  type: 'primary' | 'success' | 'warning' | 'danger'
}

export function Badge({ text = 'Custom label', type = 'primary' }: Props) {
  const badgeClass = `badge-${type}`
  return (
    <span className={['badge-container', badgeClass].join(' ')}>{text}</span>
  )
}
