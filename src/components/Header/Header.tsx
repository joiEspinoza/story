import React from 'react'

import { HeaderUser } from '../HeaderUser/HeaderUser'
import { Logo } from '../Logo/Logo'
import { Notification } from '../Notification/Notification'
import { Title } from '../Title/Title'

import '../../styles/base.css'

export type HeaderProps = {
  title: string
}

export const Header = ({ title }: HeaderProps) => (
  <div className="header-container">
    <div className="header-title">
      <div className="header-logo">
        <Logo />
      </div>
      <Title height="semibold" size="lg" text={title} />
    </div>
    <div className="header-user">
      <Notification hasNotifications />
      <HeaderUser text="PS" />
    </div>
  </div>
)
