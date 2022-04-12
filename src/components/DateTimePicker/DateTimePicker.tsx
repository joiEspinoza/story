import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import { es } from 'date-fns/locale'

import '../../styles/base.css'

export interface Props {
  /**
   * Etiqueta del DatePicker
   */
  label: string
  /**
   * Indica si el campo es obligatorio
   */
  required: boolean
  /**
   * Indicador de error
   */
  hasError: boolean
}

export const DateTimePicker = ({ label, required, hasError }: Props) => {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="datepicker-container">
      <span className='datepicker-label'>
        {label} {required && '*'}
      </span>

      <div className={`dates-container ${hasError ? 'has-error' : 'no-error'}`}>
        <DatePicker
          id="startDate"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showTimeSelect
          dateFormat="dd-MM-yyyy HH:mm"
          timeCaption="Hora"
          locale={es}
        />

        <span>-</span>

        <DatePicker
          id="endDate"
          className="to"
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showTimeSelect
          dateFormat="dd-MM-yyyy HH:mm"
          timeCaption="Hora"
          locale={es}
        />
      </div>
    </div>
  )
}
