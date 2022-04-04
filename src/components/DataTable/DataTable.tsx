import React, { useEffect, useMemo, useState } from 'react'
import { Icon } from '../Icon/Icon'

const DOTS = '...'

const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

interface UsePaginationProps {
  currentPage: number
  pageSize: number
  siblingCount?: number
  totalCount: number
}

const usePagination = ({
  currentPage,
  pageSize,
  siblingCount = 1,
  totalCount,
}: UsePaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    )

    const showLeftDots = leftSiblingIndex > 2
    const showRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )

      return [firstPageIndex, DOTS, ...rightRange]
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex)
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}

function Paginator({
  currentPage = 1,
  labelFromTo,
  labelItemPerPage,
  numPerPage,
  onPageChange,
  siblingCount = 1,
  totalCount,
}: any) {
  const [pageSize] = useState(numPerPage[0])

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    totalCount,
    siblingCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) return null

  const onSelectPageNumber = (e: any) => {
    console.log(e)
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrev = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <div className="paginator-container">
      <p>{labelItemPerPage}</p>
      <select className="paginator-select-page" onChange={onSelectPageNumber}>
        {numPerPage.map((n: number, i: number) => (
          <option key={i.toString()}>{n}</option>
        ))}
      </select>
      <p>
        {currentPage} {labelFromTo}{' '}
        {paginationRange[paginationRange.length - 1]}
      </p>
      <button
        className="paginator-button-direction"
        onClick={onPrev}
        type="button"
      >
        <Icon icon="ChevronLeftIcon" />
      </button>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <span>&#8230;</span>
        }

        const classbutton = `paginator-button paginator-button-${
          currentPage === pageNumber ? 'active' : 'default'
        }`

        return (
          <button className={classbutton} key={i.toString()} type="button">
            {pageNumber}
          </button>
        )
      })}
      <button
        className="paginator-button-direction"
        onClick={onNext}
        type="button"
      >
        <Icon icon="ChevronRightIcon" />
      </button>
    </div>
  )
}

interface HeaderElementProps {
  /**
   Campo de la columna
   */
  field: string
  /**
   Label de la columna
   */
  label: string
  /**
   Tipo de dato
   */
  type: string
  /**
   * Indica si el campo puede ser ordenado
   */
  orderable?: boolean
  /**
   * Indica si el campo puede ser ocultable
   */
  hideable?: boolean
  /**
   *  Indica si el campo puede ser filtrado
   */
  filterable?: boolean
}

export interface DataTableProps {
  /**
   Conjunto de datos
   */
  data: any[]
  /**
   Habilitar checkbox para eliminación de datos
   */
  enableCheckbox: boolean
  /**
   Habilitar paginador
   */
  enablePaginator: boolean
  /**
   Conjunto de datos que componen el header
   */
  header: HeaderElementProps[]
  /**
   Label 'N de M'
   */
  labelFromTo: string
  /**
   Label 'Item por pàgina'
   */
  labelItemPerPage: string
  /**
   Números de filas por página
   */
  numPerPage: number[]
  /**
   Evento que verifica el estado de checkbox
   */
  onCheckStatus?: any
  /**
   Cantidad total de filas
   */
  totalCount: number
}

export function DataTable({
  data = [],
  enableCheckbox = true,
  enablePaginator = true,
  header = [],
  labelFromTo = 'de',
  labelItemPerPage = 'Item por página',
  numPerPage = [10, 25, 50],
  onCheckStatus,
  totalCount,
}: DataTableProps) {
  const [checkHeader, setCheckHeader] = useState(false)
  const [checkData, setCheckData] = useState(new Array(data.length).fill(false))
  const [currentPage, setCurrentPage] = useState(1)

  const handleCheckData = (position: number) => {
    const updateCheckedData = checkData.map((dat, index) =>
      index === position ? !dat : dat
    )
    setCheckData(updateCheckedData)
  }

  useEffect(() => {
    const nCheck = checkData.filter((cd) => cd === true).length

    if (nCheck === data.length) {
      setCheckHeader(true)
    } else {
      setCheckHeader(false)
    }

    if (nCheck > 0) {
      onCheckStatus(true)
    } else {
      onCheckStatus(false)
    }
  }, [checkData])

  useEffect(() => {
    if (checkHeader) {
      const updCheckedData = checkData.map(() => true)
      setCheckData(updCheckedData)
    }
  }, [checkHeader])

  return (
    <div className="datatable-container">
      <div>
        <div className="datatable-header">
          {header.length > 0 && enableCheckbox && (
            <div className="datatable-check">
              <input
                checked={checkHeader}
                onChange={() => setCheckHeader(!checkHeader)}
                type="checkbox"
              />
            </div>
          )}
          {header.map((h, i) => (
            <div className="datatable-header-column" key={i.toString()}>
              {h.label}
            </div>
          ))}
        </div>
        <div>
          {data.map((dd, ii) => (
            <div className="datatable-data" key={ii.toString()}>
              {header.length > 0 && enableCheckbox && (
                <div className="datatable-check">
                  <input
                    checked={checkData[ii]}
                    onChange={() => handleCheckData(ii)}
                    type="checkbox"
                  />
                </div>
              )}
              {header.map((h, i) => (
                <div className="datatable-data-column" key={i.toString()}>
                  {dd[h.field]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {enablePaginator && (
        <Paginator
          currentPage={currentPage}
          labelFromTo={labelFromTo}
          labelItemPerPage={labelItemPerPage}
          numPerPage={numPerPage}
          onPageChange={(e: any) => setCurrentPage(e)}
          totalCount={totalCount}
        />
      )}
    </div>
  )
}
