import React from 'react'

import '../../styles/base.css'
import { Avatar } from '../Avatar/Avatar'
import { HeaderUser } from '../HeaderUser/HeaderUser'
import { Notification } from '../Notification/Notification'
import { Title } from '../Title/Title'

export type HeaderProps = {
  title: string
}

export const Header = (
  {
    title
  }: HeaderProps
) => (
  <div className='header-container'>
    <div className='header-title'>
      <Avatar picture='https://picsum.photos/200' user='logo' />
      <Title height='semibold' size='lg' text={title} />
    </div>
    <div className='header-user'>
      <Notification hasNotifications />
      <HeaderUser text='PS' />
    </div>
  </div>
)