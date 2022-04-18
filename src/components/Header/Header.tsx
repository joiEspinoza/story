import React from 'react'

import { HeaderUser } from '../HeaderUser/HeaderUser'
import { Logo } from '../Logo/Logo'
import { Notification } from '../Notification/Notification'
import { Title } from '../Title/Title'

import '../../styles/base.css'

export type HeaderProps = {
  /*
   * Titulo en header
   * */
  title: string
  /*
   * Iniciales usuario
   * */
  userAbbreviation?: string
}

export const Header = ({ title, userAbbreviation = 'NN' }: HeaderProps) => (
  <div className="header-container">
    <div className="header-title">
      <div className="header-logo">
        <Logo />
      </div>
      <Title height="semibold" size="lg" text={title} />
    </div>
    <div className="header-user">
      <Notification hasNotifications />
      <HeaderUser text={userAbbreviation.toUpperCase()} />
    </div>
  </div>
)

Header.defaultProps = {
  userAbbreviation: 'NN'
}
