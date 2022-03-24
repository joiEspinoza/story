import React from 'react'

import '../../styles/base.css'

export interface HeaderUserProps {
  /**
  Texto
   */
  text: string
}

export function HeaderUser({
  text = ''
}:HeaderUserProps) {
  return (
    <div className='headeruser-container'>
      <span>{text}</span>
    </div>    
  )
}