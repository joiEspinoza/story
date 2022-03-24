import React from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'
import { Image } from '../Image/Image'

export interface avatarProps {
  /**
  * Imagen a desplegar
  */
  picture?: string
  /**
  * Texto alternativo de avatar
  */
  user: string
}

export function Avatar({
  picture,
  user = 'Profile picture'
}: avatarProps) {
  return (
    <div className={['avatar-container'].join(' ')}>
      { picture && <Image src={`${picture}`} alt={user}/> }
    </div>
  )
}
