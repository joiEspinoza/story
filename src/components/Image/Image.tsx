import React from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

export interface imageProps {
  /**
   * Ruta de la imagen a desplegar
   */
  src: string
  /**
   * Texto alternativo de imagen
   */
  alt: string
}

export function Image({ src, alt }: imageProps) {
  return (
    <img
      className={['image-container'].join(' ')}
      src={src}
      alt={alt}
    />
  )
}
