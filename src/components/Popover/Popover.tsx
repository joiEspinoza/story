import React, { useState } from 'react'
import { usePopper } from 'react-popper'

import '../../styles/base.css'
import { Button, ButtonProps } from '../Button/Button'

export interface Props {
  /**
   * texto del popover
   */
  text?: string
  /**
   * 
   */
  buttons?: Array<ButtonProps>
}

export function Popover({ text = '', buttons }: Props) {
  const [isOpen, setIsOpen] = useState(true)

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    // modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  })

  return (
    <>
      <div
        className="popover__button"
        role="button"
        tabIndex={0}
        aria-hidden="true"
        ref={setReferenceElement}
        onClick={() => setIsOpen(!isOpen)}
      >
        Popover
      </div>

      <div
        className={[
          'popover__content',
          isOpen && 'popover__content__hidden',
        ].join(' ')}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {text}

        {buttons && (
          <div className="popover__buttons">
            {buttons.map((button) => (
              <Button key={Math.random()} {...button} />
            ))}
          </div>
        )}
        
      </div>
    </>
  )
}

Popover.defaultProps = {
  text: '',
  buttons: undefined,
}