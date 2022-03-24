import React from 'react'

import '../../styles/base.css'


export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   Label del radio
   */
  label?: string
  /**
   * Estado inicial del switch
   */
  checked: boolean
}

export function Switch({
  label = '',
  checked,
}: Props) {

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="form-switch">
      <input type="checkbox" checked={ checked } />
      <i/>
      {label}
    </label>
  )
}
