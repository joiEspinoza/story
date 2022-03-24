/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

import '../../styles/base.css'

export interface AccordionProps {
  /**
  Titulo
   */
  title: string
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[]
}

export function Accordion({
  children,
  title = ''
}: AccordionProps) {
  const [collapse, setCollapse] = useState(true)

  const changeCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <div className='accordion-container'>
      <div className='accordion-header' onClick={() => changeCollapse()}>
        <div>{title}</div>
        <div>
            {/* <Icon icon={`Chevron${collapse ? 'Up' : 'DownIcon'}`} size='lg' /> */}
        </div>
      </div>
      {collapse && <div className='accordion-body'>{children}</div>}
    </div>
  )
}