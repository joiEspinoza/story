import React, { useState } from 'react'

import '../../styles/base.css'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   Label del radio
   */
  label?: string
  /**
   * Estado inicial del switch (Por defecto false)
   */
  checked?: boolean
  /**
   * Evento OnChange
   */
  onChange?: () => void
}

export function Switch({ label, checked, ...props }: Props) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
    if (props.onChange) {
      props.onChange()
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="form-switch">
      <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
      <i />
      {label}
    </label>
  )
}

Switch.defaultProps = {
  label: '',
  checked: false,
  onChange: () => {},
}
