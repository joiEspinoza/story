import React from 'react'

import '../../styles/base.css'
import { Button, ButtonProps } from '../Button/Button'
import { Icon, Props as IconProps } from '../Icon/Icon'

type SidebarMenuElement = {
  id: number
  label: string
  key: string
  icon?: IconProps['icon']
  active?: boolean
  items?: SidebarMenuElement[]
  route?: string
}

type SidebarMenuProps = {
  elements: SidebarMenuElement[]
}

export type SidebarProps = {
  mainButton?: ButtonProps
  menuElements: SidebarMenuProps['elements']
  footerText?: string
}

const SidebarMenu = ({ elements }: SidebarMenuProps) => {
  const sidebarElements = elements.map((element) => {
    if (element.key === 'separator') {
      return (
        <li key={element.id} className={['sidebar-menu-separator'].join(' ')} />
      )
    }

    const { id, label, icon, active, route, items } = element

    const isActive =
      active === true ||
      items?.find((item) => item.active === true) !== undefined
    const hasIcon = icon !== undefined
    const hasItems = element.items !== undefined

    return (
      <li key={id} className={['sidebar-menu-element'].join(' ')} { ...route && ('algo') }>
        <div className={['sidebar-menu-left', isActive && 'active '].join(' ')}>
          {hasIcon ? <Icon icon={icon} /> : <Icon icon="CheckCircleIcon" />}
          <span>{label}</span>
        </div>
        <div className={['sidebar-menu-right'].join(' ')}>
          {hasItems &&
            (isActive ? (
              <Icon icon="ChevronUpIcon" />
            ) : (
              <Icon icon="ChevronDownIcon" />
            ))}
        </div>

        {hasItems && (
          <ul className={['sidebar-menu-subitems'].join(' ')}>
            {items?.map((subitem) => {
              const {
                id: subitemId,
                label: subitemLabel,
                active: subitemActive,
              } = subitem
              const isSubitemActive = subitemActive === true

              return (
                <li
                  key={subitemId}
                  className={['sidebar-menu-subitem'].join(' ')}
                >
                  <span className={[isSubitemActive && 'active '].join(' ')}>
                    {subitemLabel}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </li>
    )
  })

  return <ul>{sidebarElements}</ul>
}

export const Sidebar = ({
  mainButton,
  menuElements,
  footerText,
}: SidebarProps) => (
  <div className="sidebar-container">
    <div>
      {mainButton && (
        <>
          <div className="sidebar-main-button">
            <Button {...mainButton} />
          </div>
          <hr />
        </>
      )}

      <SidebarMenu elements={menuElements} />
    </div>

    <div>
      <div className="sidebar-footer">{footerText}</div>
    </div>
  </div>
)
