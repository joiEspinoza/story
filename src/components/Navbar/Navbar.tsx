import React from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

import { Title } from '../Title/Title'
import { Select } from '../Select/Select'
import { Button, ButtonProps } from '../Button/Button'
// import { Props as IconProps } from '../Icon/Icon'
import { Finder } from '../Finder/Finder'

interface NavbarItem {
  key: number,
  icon?: ButtonProps['icon'],
  onClick?: ButtonProps['onClick'],
  type: 'button' | 'finder',
}

interface BrandSelectorItem {
  key: number,
  labelOption: string
}

export interface NavbarProps {
  /*
  Title 
  */
  title: string
  /*
  Brand selector
  */
  brandSelector?: 'jumbo' | 'sisa' | 'undefined'
  /*
   * Brand options 
   */
  brandItems?: BrandSelectorItem[]
  /*
  Navbar Items
  */
  navbarItems?: NavbarItem[]
}
const showButton = ({ icon, onClick}: ButtonProps) => (<Button  visualType='link' icon={icon} onClick={onClick} />
)

const showFinder = () => (<div className="finder">
  <Finder placeholder='Search' />
</div>)

const showBrandSelector = ({ brandSelector, brandItems }: {brandSelector: string, brandItems:BrandSelectorItem[]}) => (brandSelector !== 'undefined'
  && brandItems?.length > 0
  && <Select visualType='jumbo' placeholder={brandSelector} opciones={brandItems} />)
        

const NavbarItems = (items: NavbarItem[] = []) => (
  <div className="navbar-items">
    {items?.length > 0 && [...items].map(({icon, type, onClick}) => (type === 'button'
      ? icon && showButton({ icon, onClick })
      : showFinder()
      )    
    )}
  </div>
)

export const Navbar = ({
  title = 'Title',
  brandSelector,
  brandItems = [],
  navbarItems = []
}: NavbarProps) => {
  const navbarItemsRender = navbarItems && NavbarItems(navbarItems)
  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <Title text={title} size='2xl' />
        {
          brandSelector && showBrandSelector({ brandSelector, brandItems})
        }
      </div>
      {
        navbarItemsRender 
      }
    </div>
  )
}
