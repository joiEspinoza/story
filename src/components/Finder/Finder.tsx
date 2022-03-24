import React, { InputHTMLAttributes } from 'react'

import '../../styles/base.css'

export interface FinderProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   Placeholder
   */
  placeholder: string
}

export const Finder = ({
  placeholder = 'Buscar',
  ...props
}:FinderProps) => (
  <div className='finder-container'>
    <svg
      className='h-4 w-4'
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
    <input 
      placeholder={placeholder}
      type="text"
      {...props} />
  </div>
)