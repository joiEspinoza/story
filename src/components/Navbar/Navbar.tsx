import React from 'react'

import { Title } from '../Title/Title'
import { Button, ButtonProps } from '../Button/Button'
import { Finder } from '../Finder/Finder'
import { Select, SelectProps } from '../Select/Select'

import '../../styles/base.css'

interface NavbarButtonProps {
  key: number
  icon: ButtonProps['icon']
  onClick?: ButtonProps['onClick']
}

export interface NavbarProps {
  /*
  Titulo del navbar
  */
  title?: string
  /*
  Opciones que contendra el selector de marcas
  */
  brandItems?: SelectProps['opciones']
  /*
  Botones que contendra el navbar
  */
  navbarButtons?: NavbarButtonProps[]
  /**
   * Indica si se desplegará el cuadro de busqueda
   */
  finder?: boolean
}

const renderFinder = () => (
  <div className="finder">
    <Finder placeholder="Search" />
  </div>
)

const renderNavbarButtons = (buttons: NavbarProps['navbarButtons'] = []) =>
  buttons.length &&
  buttons.map(({ key, icon, onClick }) => (
    <Button key={key} visualType="link" icon={icon} onClick={onClick} />
  ))

const renderBrandSelector = (brands: NavbarProps['brandItems'] = []) => {
  const activeBrand = brands?.find(({ active }) => active)

  return (
    <Select
      visualType="jumbo"
      placeholder={activeBrand ? activeBrand.labelOption : ''}
      opciones={brands.filter(brand => !brand.active)}
    />
  )
}

export const Navbar = ({
  title,
  brandItems,
  navbarButtons,
  finder,
}: NavbarProps) => (
  <div className="navbar-container">
    <div className="navbar-left">
      { title && <Title text={title} size="2xl" /> }

      { brandItems && (
        brandItems.length === 1 ? (
          <Title text={brandItems[0].labelOption} size="base" />
        ) : (
          renderBrandSelector(brandItems)
        )
      )}      
    </div>

    <div className="navbar-right">
      {navbarButtons && renderNavbarButtons(navbarButtons)}
      {finder && renderFinder()}
    </div>
  </div>
)

Navbar.defaultProps = {
  title: '',
  brandItems: [],
  navbarButtons: [],
  finder: true,
}