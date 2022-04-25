import React from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

import { Icon } from '../Icon/Icon'

interface StepperElement {
  id: number
  active?: boolean
  onClick?: () => void
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
    const { id, active } = element

    return (
      <div key={id} className="stepper-element">
        <div className="stepper-element-position">
          <div>
            {active ? (
              <span className="stepper-icon">
                <Icon icon="CheckCircleIcon" size="lg" />
              </span>
            ) : (
              <span className="stepper-icon stepper-icon-inactive">
                <div className="stepper-dot-container">
                  <span className="stepper-dot">&nbsp;</span>
                </div>
              </span>
            )}
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
