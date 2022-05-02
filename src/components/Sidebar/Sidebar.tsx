import React from 'react'
import '../../styles/base.css'
import { Button, ButtonProps } from '../Button/Button'
import { Icon, Props as IconProps } from "../Icon/Icon"

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
  collapse : boolean
}

export type SidebarProps = {
  mainButton?: ButtonProps
  /*
   * Elementos del menu
   */
  menuElements: SidebarMenuProps['elements']
  /*
   * Texto en footer
   */
  footerText?: string
  labelCollapse?: string
  collapse: boolean
  collapseAction: () => void
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
      >
        <a href={route || '#'}>
          <div className={[!collapse ? 'sidebar-menu-left' : 'sidebar-menu-left-collapse', isActive ? 'active':''].join(' ')}>
            <span>{hasIcon ? <Icon icon={icon} /> : <Icon icon='CheckCircleIcon' />}</span>
            <span {...(collapse && { className: 'hidden' }) }>{label}</span>
          </div>
        </a>
        <div className={['sidebar-menu-right'].join(' ')}>
          {hasItems &&
            (isActive ? (
              <Icon icon='ChevronUpIcon' />
            ) : (
              <Icon icon='ChevronDownIcon' />
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
                  <span className={[isSubitemActive ? 'active' : ''].join(' ')}>
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

const CollapseButton = (props:any) =>{
  const { labelCollapse, collapseAction, collapse } = props
  return(
    <span
          onKeyDown={() => {}}
          role='button'
          aria-hidden='true'
          onClick={collapseAction}
          className='mb-4 text-black ml-4'
        >
          {!collapse ? (
            <div className='flex flex-row sidebar-menu-element ml-2 text-gray-400'>
              <span>
                <Icon icon='ArrowCircleLeftIcon' />
              </span>
              <p className='ml-2'>{labelCollapse}</p>
            </div>
          ) : (
            <span className='text-gray-400'>
              <Icon icon='ArrowCircleRightIcon' />
            </span>
          )}
        </span>
  )
}

export const Sidebar = ({
  mainButton,
  menuElements,
  footerText,
  collapse,
  collapseAction,
  labelCollapse,
}: SidebarProps) => (
  <div className="flex flex-row text-gray-400">
    <div className={`sidebar-container ${collapse ? 'px-6' : 'px-8'}`}>
      <div className="w-fit">
        {mainButton && (
          <>
            <div
              className={['sidebar-main-button', `${!collapse && 'ml-2'}`].join(
                ' '
              )}
            >
              <Button
                {...mainButton}
                label={!collapse ? mainButton.label : ''}
              />
            </div>
            <hr />
          </>
        )}

        <SidebarMenu elements={menuElements} collapse={collapse} />

        <CollapseButton
          labelCollapse={labelCollapse}
          collapse={collapse}
          collapseAction={collapseAction}
        />
      </div>

      {!collapse && <span className="sidebar-footer">{footerText}</span>}
    </div>
  </div>
)


Sidebar.defaultProps = {
  mainButton: undefined,
  footerText: '',
  labelCollapse: ''
}

