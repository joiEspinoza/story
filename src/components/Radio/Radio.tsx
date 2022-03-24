import React, { InputHTMLAttributes } from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

interface RadioOptionsProps {
  label: string
  value: string
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   Label del radio
   */
  label: string
  name: string
  /**
   Opciones
   */
  options: RadioOptionsProps[],
  /**
   Requerido
   */
  required: boolean
}

export function Radio({
  label = '',
  options = [],
  required = false,
  ...props
}: RadioProps) {
  const ops = options.map((rd) => <span className='radio-elements-container'><input className='radio-element-control' type="radio" value={rd.value} {...props} /><span className='radio-element-label'>{rd.label}</span></span>)

  return (
    <div className='radio-container'>
        <span className='radio-label'>{label}{required && '*'}</span>
        <div className='radio-elements'>{ops}</div>
    </div>
  )
}