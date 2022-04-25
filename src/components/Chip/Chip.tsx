import React, { useEffect, useState } from 'react'

import '../../styles/base.css'
import Icon from '../Icon'

interface SelectOptions {
  label: string
  value: string
}

export interface ChipProps {
  label: string
  hasError?: boolean
  chips: SelectOptions[]
  onChange?: any
}

export function Chip({
  label, 
  hasError, 
  chips,
  onChange 
}: ChipProps) {
  const [selectChip, setSelectChip] = useState('')

  const [chipsAdded, setChipsAdded] = useState<Array<String>>([])

  useEffect(() => {
    if (selectChip) setChipsAdded([...chipsAdded, JSON.parse(selectChip).label])
  }, [selectChip])

  useEffect(() => {
    onChange(chipsAdded)
  }, [chipsAdded])

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectChip(e.target.value)
  }
  
  const handleRemoveChip = (index: number) => {
    setChipsAdded(chipsAdded.filter((_, i) => i !== index))
  }

  return (
    <div className="chip-container">
      <span className="label">{label}</span>
      <div className="input-container">
        <ul className="chips">
          {chipsAdded.map((chip, index) => (
            <li className="chip" key={Math.max(index)}>
              <span>{chip}</span>
              <div
                className="icon-remove"
                onClick={() => handleRemoveChip(index)}
                onKeyPress={() => handleRemoveChip(index)}
                role="button"
                tabIndex={0}
              >
                <Icon icon="XIcon" size="sm" />
              </div>
            </li>
          ))}
        </ul>
        <select
          className="select"
          value={selectChip}
          onChange={(e) => handleOnChange(e)}
        >
          <option value="">Elige las necesarias...</option>
          {chips.map((option, index) => (
            <option key={Math.max(index)} value={JSON.stringify(option)}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {hasError}
    </div>
  )
}

Chip.defaultProps = {
  hasError: false,
  onChange: ()=>{}
}
