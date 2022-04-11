import React, { useState } from 'react'
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
  collapse : any
}

export type SidebarProps = {
  mainButton?: ButtonProps
  menuElements: SidebarMenuProps['elements']
  footerText?: string
}

const SidebarMenu = ({ elements,collapse }: SidebarMenuProps) => {
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
      <li
        key={id}
        className={['sidebar-menu-element'].join(' ')}
        {...(route && 'algo')}
      >
        <div className={[!collapse ? 'sidebar-menu-left' : "sidebar-menu-left-collapse", isActive && 'active'].join(' ')}>
          <span>{hasIcon ? <Icon icon={icon} /> : <Icon icon="CheckCircleIcon" />}</span>
          <span className={collapse && 'hidden'}>{label}</span>
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
}: SidebarProps) =>
{
  const [collapse, setCollapse] = useState(false)
  return (
    <div className="flex flex-row">
      <div className="sidebar-container">
        <div className="w-fit">
          {mainButton && (
            <>
              <div className="sidebar-main-button">
                <Button
                  {...mainButton}
                  label={!collapse ? mainButton.label : ''}
                />
              </div>
              <hr />
            </>
          )}

          <SidebarMenu elements={menuElements} collapse={collapse} />
        </div>

        {!collapse && (
          <div>
            <div className="sidebar-footer">{footerText}</div>
          </div>
        )}
      </div>

      <div
        className="sidebar-collpsebar"
        onKeyDown={() => {}}
        role="button"
        aria-hidden="true"
        onClick={() => {
          setCollapse(!collapse)
        }}
      >
        <span className="text-blue-600">
          {!collapse ? (
            <Icon icon="ChevronLeftIcon" />
          ) : (
            <Icon icon="ChevronRightIcon" />
          )}
        </span>
      </div>
    </div>
  )
} 

Sidebar.defaultProps = {
  mainButton: undefined,
  footerText: '',
}
