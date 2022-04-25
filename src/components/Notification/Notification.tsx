import React from 'react'

import '../../styles/base.css'
import { Icon } from '../Icon/Icon'

export interface NotificationProps {
  /**
  Indica si existen notificaciones
  */
  hasNotifications: boolean
}

export function Notification({ hasNotifications = false }: NotificationProps) {
  return (
    <div className={['notification-container', hasNotifications ? 'with-notification' : 'without-notification'].join(' ')}>
      <span className='text-gray-400'><Icon icon="BellIcon" /></span>

      { hasNotifications && <span className="circle"/> }
    </div>
  )
}
