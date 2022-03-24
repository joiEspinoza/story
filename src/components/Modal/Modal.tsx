/* eslint-disable react/require-default-props */
import React, { useState } from 'react'

import '../../styles/base.css'
import { Button, ButtonProps } from '../Button/Button'
import { Stepper, StepperProps } from '../Stepper/Stepper'

interface multiTitle {
  text: string
  active?: boolean
}
interface ModalHeaderProps {
  title?: string
  titles?: Array<multiTitle>
  buttons?: Array<ButtonProps>
  optionsStepper?: StepperProps['elements']
  toggleModal?: () => void
}

export interface ModalProps {
  /**
   Elementos / Componentes que forman el body del modal
   */
  body: JSX.Element | JSX.Element[]
  /**
   Elemento / Componente que hace de cabecerea
   */
  header?: ModalHeaderProps
  /**
   * Indica si el modal es fullscreen
   */
  fullscreen?: boolean
}

const ModalHeader = ({
  buttons,
  title,
  titles,
  optionsStepper,
  toggleModal = () => {},
}: ModalHeaderProps) => (
  <div className="header">
    {title && <div className="title">{title}</div>}
    {titles && (
      <div className="titles">
        {titles.map((singleTitle) => (
          <span
            className={singleTitle.active ? 'active' : ''}
            key={Math.random()}
          >
            {singleTitle.text}
          </span>
        ))}
      </div>
    )}
    {optionsStepper && <Stepper elements={optionsStepper} />}

    <div className="buttons">
      {buttons &&
        buttons.map((button) => <Button key={Math.random()} {...button} />)}

      <Button
        icon="XIcon"
        visualType="default"
        color="secondary"
        onClick={() => toggleModal()}
      />
    </div>
  </div>
)

export function Modal({ body, header, fullscreen = true }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return isOpen ? (
    <>
      <div
        className={[
          'modal-container',
          fullscreen
            ? 'modal-container__fullscreen'
            : 'modal-container__centered',
        ].join(' ')}
      >
        {header && (
          <ModalHeader {...header} toggleModal={() => toggleModal()} />
        )}
        <div className="modal-body">{body}</div>
      </div>

      {!fullscreen && <div className="modal-overlay" />}
    </>
  ) : null
}
