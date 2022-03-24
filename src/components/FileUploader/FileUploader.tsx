import React, { InputHTMLAttributes } from 'react'

import '../../styles/base.css'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'

export interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Texto del boton de carga
   */
  labelButton: string
  /**
   * Subtitulo del cuadro de carga
   */
  subtitle: string
  /**
   * Titulo del cuadro de carga
   */
  title: string
}

export function FileUploader({
  labelButton = '',
  subtitle = '',
  title = '',
  ...props
}: FileUploaderProps) {
  return (
    <div className="fileuploader-container">
      <div className="fileuploader-icon">
        <Icon icon="UploadIcon" />
      </div>
      <div className="fileuploader-title">{title}</div>
      <div className="fileuploader-subtitle">{subtitle}</div>
      <div className="fileuploader-separator">
        <div className="fileuploader__separator-line" />
        <span>Ó</span>
        <div className="fileuploader__separator-line" />
      </div>
      <div className="fileuploader-button">
        <Button label={labelButton} visualType="default" />
      </div>
      <input type="file" {...props} />
    </div>
  )
}
