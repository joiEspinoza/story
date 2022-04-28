import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import { es } from 'date-fns/locale'

import '../../styles/base.css'
import { setHours, setMinutes } from 'date-fns'

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
          autoComplete='off'
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
          autoComplete='off'
          id="startDate"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          onSelect= {(sDate:Date) => {
            const tDate = setMinutes(setHours(sDate, 0), 0)
            setStartDate(tDate)
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          showTimeSelect
          dateFormat="dd-MM-yyyy HH:mm"
          timeCaption="Hora"
          timeIntervals={120}
          locale={es}
          showMonthDropdown
          showYearDropdown
        />

        <span>-</span>

        <DatePicker
          autoComplete='off'
          id="endDate"
          className="to"
          selected={endDate}
          onChange={(date: Date) => {
            setEndDate(date)
          }}
          onSelect={(eDate:Date) => {
            const tDate = setMinutes(setHours(eDate, 23), 59)
            setEndDate(tDate)
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showTimeSelect
          dateFormat="dd-MM-yyyy HH:mm"
          timeCaption="Hora"
          timeIntervals={120}
          locale={es}
          showMonthDropdown
          showYearDropdown
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
