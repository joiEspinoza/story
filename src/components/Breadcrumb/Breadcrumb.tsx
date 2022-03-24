import React from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

import { Icon } from '../Icon/Icon'


interface breadcrumbElement {
  id: number
  label: string
  active?: boolean
  key: any
}

export interface BreadcrumbProps {
  /**
   * Arreglo con los elementos del breadcrumb
   */
  elements: breadcrumbElement[]
}

export function Breadcrumb({ elements }: BreadcrumbProps) {
  
  const breadcrumbElements = elements.map((element, index) => {
    const { label, active, key } = element

    const breadElementClasses = `breadcrumb-element breadcrumb-element-${(active ? 'active': 'inactive')}`

    return (
      <li
        key={key}
        className={breadElementClasses}
      >
        { index===0 ? <Icon icon="HomeIcon" /> : <Icon icon="ChevronRightIcon" /> }
        <div className="px-4">{label}</div>
      </li>
    )
  })

  return (
    <ul className="breadcrumb-container">
      {breadcrumbElements}
    </ul>
  )
}
