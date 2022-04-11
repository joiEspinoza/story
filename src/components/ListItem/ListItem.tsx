import React from 'react'

interface ListBlockProps {
  header: string
  description: string
}

export interface ListItemProps {
  /**
   Listado de bloques a mostrar 
   */
  listBlocks: ListBlockProps[]
  onClick: () => void
  /**
   Visibilidad botón   
   */
  visibleButton: boolean
  /**
   botón custome
  */
  optionButton: JSX.Element | JSX.Element[]
  /**
   clase custome para contenedor
  */
  containerCustomeClass : string
}

export function ListItem({
  listBlocks,
  onClick,
  visibleButton = true,
  optionButton,
  containerCustomeClass,
}:ListItemProps) {
  return (
    <div className={`listitem-container ${containerCustomeClass}`}>
      {listBlocks.map((bl:ListBlockProps) => (
        <div className='listitem-block' key={Math.random()}>
          <div className='listitem-block-header'>{bl.header}</div>
          <div className='listitem-block-description'>{bl.description}</div>
        </div>
      ))}
      <div className={(visibleButton ? 'cursor-pointer' : 'hidden')} onClick={onClick} aria-hidden="true">
        <div>{optionButton}</div>
      </div>
    </div>
  )
}