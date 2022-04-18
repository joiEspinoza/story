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
  hasError?: boolean
  /**
   * Indica si el componente solo considera selección de fecha solamente
   */
  onlyDate?: boolean
}

export const DateTimePicker = ({ 
  label, 
  required, 
  hasError = false,
  onlyDate = false
}: Props) => {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="datepicker-container">
      <span className='datepicker-label'>
        {label} {required && '*'}
      </span>

      <div className={['dates-container', hasError ? 'border-red-500' : 'border-gray-500'].join(' ') }>
      {onlyDate ? 
        <DatePicker
          dateFormat="dd-MM-yyyy"
          locale={es}
          onChange={(date: Date) => setStartDate(date)}
          selected={startDate}
          showMonthDropdown
          showYearDropdown
        />
      : 
      <>
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
      </>}
      </div>
    </div>
  )
}

DateTimePicker.defaultProps = {
  hasError: false,
  onlyDate: false
}
