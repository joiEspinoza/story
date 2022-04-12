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
  collapse : any
}

export type SidebarProps = {
  mainButton?: ButtonProps
  menuElements: SidebarMenuProps['elements']
  footerText?: string
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
        {...(route && 'algo')}
      >
        <div className={[!collapse ? 'sidebar-menu-left' : 'sidebar-menu-left-collapse', isActive ? 'active':''].join(' ')}>
          <span>{hasIcon ? <Icon icon={icon} /> : <Icon icon='CheckCircleIcon' />}</span>
          <span className={collapse ? 'hidden' : ""}>{label}</span>
        </div>
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
  const { collapseAction, collapse } = props
  return(
    <span
          onKeyDown={() => {}}
          role='button'
          aria-hidden='true'
          onClick={collapseAction}
          className='mb-4 text-black ml-4'
        >
          {!collapse ? (
            <div className='flex flex-row sidebar-menu-element ml-2'>
              <span>
                <Icon icon='ArrowCircleLeftIcon' />
              </span>
              <p className='ml-2'>Minimizar</p>
            </div>
          ) : (
            <span>
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
}: SidebarProps) => (
  <div className='flex flex-row'>
    <div className='sidebar-container'>
      <div className='w-fit'>
        {mainButton && (
          <>

            <div className={['sidebar-main-button',`${!collapse && 'ml-2'}`].join(' ')}>
              <Button
                {...mainButton}
                label={!collapse ? mainButton.label : ''}
              />
            </div>
            <hr />
          </>
        )}

        <SidebarMenu elements={menuElements} collapse={collapse} />

        <CollapseButton collapse={collapse} collapseAction={collapseAction}/>
        
      </div>

      {!collapse && <span className='sidebar-footer'>{footerText}</span>}
    </div>
  </div>
)


Sidebar.defaultProps = {
  mainButton: undefined,
  footerText: '',
}
