import React from 'react'
import { Icon } from '../Icon/Icon'

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
}

export function ListItem({
  listBlocks,
  onClick,
  visibleButton = true
}:ListItemProps) {
  return (
    <div className='listitem-container'>
      {listBlocks.map((bl:ListBlockProps, i:number) => (
        <div className='listitem-block' key={i.toString()}>
          <div className='listitem-block-header'>{bl.header}</div>
          <div className='listitem-block-description'>{bl.description}</div>
        </div>
      ))}
      <div className={(visibleButton ? 'cursor-pointer' : 'hidden')} onClick={onClick} aria-hidden="true">
        <Icon icon='XIcon' size='lg' />
      </div>
    </div>
  )
}