import React from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

interface StepperElement {
  id: number
  label?: string
  active?: boolean
}

export interface StepperProps {
  /**
  * Elementos del stepper
  * {
  *  id: number,
  *  label: string,
  *  active?: boolean
  }
  */
  elements: StepperElement[]
}

export function Stepper({ elements }: StepperProps) {
  const stepperElements = elements.map((element, index) => {
    const { id, label, active } = element

    const stepperIdClass = `stepper-element-id-container-${active ? 'active' : 'inactive'}`
    const stepperIdTextClass = `stepper-element-id-container-text-${active ? 'active' : 'inactive'}`

    return (
      <div key={id} className="stepper-element">
        <div className="stepper-element-position">
          <div className={stepperIdClass}>
            <span className={stepperIdTextClass}>
              {id}
            </span>
          </div>
          <div className="stepper-element-label-container">
            {label}
          </div>
        </div>
        {index + 1 !== elements.length ? (
          <div className="stepper-line-element" />
        ) : null}
      </div>
    )
  })

  return (
    <div className="stepper-container">
      {stepperElements}
    </div>
  )
}
