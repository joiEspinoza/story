import React, { TextareaHTMLAttributes } from 'react'

import '../../styles/base.css'

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>  {
  /**
  Label del input
  */
  label: string
  /**
  Placeholder del input
  */
  placeholder?: string
  /**
  Si control es solo lectura
  */
  readonly?: boolean
  /**
  Requerido
   */
  required: boolean
}

export function Textarea({
  label = '', 
  placeholder = '', 
  readonly = false,
  required = false, 
  ...props
}: Props) {
  const textareaClass = `textarea-control-${readonly ? 'inactive' : 'active'}`

  return (
    <div className="textarea-container">
      <span className="textarea-label">{label}{required && '*'}</span>
      <textarea className={textareaClass} readOnly={readonly} placeholder={placeholder} {...props}/>
    </div>
  )
}
