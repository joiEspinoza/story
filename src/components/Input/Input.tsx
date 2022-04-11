import React, { InputHTMLAttributes } from 'react'

import '../../styles/base.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
  Label del input
  */
  label: string
  /**
  Placeholder del input
  */
  placeholder?: string
  /**
  Si input es solo lectura
  */
  readonly?: boolean
  /**
  Indica si el campo es requerido
   */
  required: boolean
  /**
   * Indica que el input tiene un error
   */
  hasError?: boolean
  /**
   * Indica que el input tiene un warning
   */
  hasWarning?: boolean
}

export function Input({
  label,
  placeholder,
  readonly,
  required,
  hasError,
  hasWarning,
  ...props
}: InputProps) {
  const inputClass = `input-control-${readonly ? 'inactive' : 'active'}`

  return (
    <div className="input-container">
      <span className={['input-label'].join(' ')}>
        {label}
        {required && '*'}
      </span>

      <input
        type="text"
        className={[
          inputClass,
          hasError && 'has-error',
          hasWarning && 'has-warning',
        ].join(' ')}
        readOnly={readonly}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

Input.defaultProps = {
  placeholder: '',
  readonly: false,
  hasError: false,
  hasWarning: false,
}
