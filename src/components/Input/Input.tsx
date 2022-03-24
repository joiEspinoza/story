import React, { InputHTMLAttributes } from 'react'

import '../../styles/base.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
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

export function Input({
  label = '', 
  placeholder = '', 
  readonly = false,
  required = false, 
  ...props
}: InputProps) {
  const inputClass = `input-control-${readonly ? 'inactive' : 'active'}`

  return (
    <div className="input-container">
      
      <span className="input-label">{label}{required && '*'}</span>
      
      <input
        type="text"
        className={inputClass}
        readOnly={readonly}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
