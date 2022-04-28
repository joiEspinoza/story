import React, { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

interface SelectOptions extends OptionHTMLAttributes<HTMLOptionElement> {
  key: number
  labelOption: string
  active?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   Label del select
   */
  label?: string
  /**
   Placeholder del select
   */
  placeholder: string
  /**
   Si select es de lectura
   */
  readonly?: boolean
  /**
   Requerido
   */
  required?: boolean
  /**
   Opciones del select
   {
     key: number,
     labelOption: string
   }
   */
  opciones: SelectOptions[]
  /*
   * Tipo de visualizacion
   */
  visualType?: 'primary' | 'jumbo'
  /**
   * Indica que el select tiene un error
   */
  hasError?: boolean
}

export function Select({
  label,
  placeholder,
  readonly,
  required,
  opciones,
  visualType,
  hasError = false,
  ...props
}: SelectProps) {
  const clase = visualType === 'primary'
    ? `select-control-${readonly ? 'inactive' : 'active'}`
    : `badge-select flag-${visualType}`
  
  const opcionesSelect = opciones.map((opc) => {
    const { key, labelOption, ...propsops } = opc

    return(
      <option key={key} {...propsops}>{labelOption}</option>
    )
  }) 
  return (
    <div className='select-container'>
      <span className="select-label">{label}{required && '*'}</span>
      <select className={[clase, hasError && 'has-error'].join(' ')} disabled={readonly} {...props}>
        <option value='-1' hidden selected>{placeholder}</option>
        {opcionesSelect}
      </select>
    </div>
  )    
}

Select.defaultProps = {
  label: '',
  readonly: false,
  required: false,
  visualType: 'primary',
  hasError: false
}