/* eslint-disable react/require-default-props */
import React from 'react'

import '../../styles/base.css'
import { Button, ButtonProps } from '../Button/Button'
import { Stepper, StepperProps } from '../Stepper/Stepper'

interface multiTitle {
  text: string
  active?: boolean
}
export interface ModalHeaderProps {
  title?: string
  titles?: Array<multiTitle>
  buttons?: Array<ButtonProps>
  optionsStepper?: StepperProps['elements']
  toggleModalHeader?: () => void
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

  /**
   * posicion modal
   */
  position?: 'fixed' | 'absolute'

  /**
   * Funcion despliegue Modal
   */
  toggleModal?: () => void
}

const ModalHeader = ({
  buttons,
  title,
  titles,
  optionsStepper,
  toggleModalHeader,
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
        label=""
        onClick={toggleModalHeader}
        visualType="link"
      />
      
    </div>
  </div>
)

export function Modal({
  body,
  header,
  fullscreen = true,
  position,
  toggleModal,
}: ModalProps) {
  return (
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
          <>
            <ModalHeader {...header} />
            <hr/>
          </>
        )}
        <div className="modal-body">{body}</div>
      </div>

      {!fullscreen && (
        <div
          className={`modal-overlay ${position}`}
          onClick={toggleModal}
          onKeyDown={() => {}}
          role="button"
          aria-hidden="true"
        />
      )}
    </>
  )
}
