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
  const [pageSize, setPageSize] = useState(numPerPage[0])

  useEffect(() => {
    onPageChange({ currentPage: 1, pageSize })
  }, [pageSize])

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    totalCount,
    siblingCount,
  })

  if (currentPage === 0 || paginationRange.length < 1) return null

  const onSelectPageNumber = (e: any) => {
    setPageSize(parseInt(e.target.value, 10))
  }

  const onNext = () => {
    if (currentPage < paginationRange.length) {
      onPageChange({ currentPage: currentPage + 1, pageSize })
    }
  }

  const onSelectPage = (e: any) => {
    const page = parseInt(e.target?.innerHTML, 10)
    onPageChange({ currentPage: page, pageSize })
  }

  const onPrev = () => {
    if (currentPage > 1) {
      onPageChange({ currentPage: currentPage - 1, pageSize })
    }
  }

  return (
    <div className="paginator-container">
      <p>{labelItemPerPage}</p>
      <select className="paginator-select-page" onChange={onSelectPageNumber}>
        {numPerPage.map((n: number, i: number) => (
          <option key={Math.max(i)}>{n}</option>
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
          <button className={classbutton} key={Math.max(i)} type="button" onClick={onSelectPage}>
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
  /*
  * Evento que se ejecuta cuando se cambia de página
  */
  onPageChange?: any
}

export function DataTable({
  data,
  enableCheckbox,
  enablePaginator,
  header,
  labelFromTo,
  labelItemPerPage,
  numPerPage,
  onCheckStatus,
  totalCount,
  onPageChange
}: DataTableProps) {
  const [checkHeader, setCheckHeader] = useState(false)
  const [checkData, setCheckData] = useState(new Array(data.length).fill(false))
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(numPerPage[0])

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

  useEffect(() => {
    onPageChange({ currentPage, pageSize })
  }, [currentPage, pageSize])

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
            <div className="datatable-header-column" key={Math.max(i)}>
              {h.label}
            </div>
          ))}
        </div>
        <div>
          {data.map((dd, ii) => (
            <div className="datatable-data" key={Math.max(ii)}>
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
                <div className="datatable-data-column" key={Math.max(i)}>
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
          onPageChange={(e: any) => {
              setPageSize(e.pageSize)
              setCurrentPage(e.currentPage)
            }
          }
          totalCount={totalCount}
        />
      )}
    </div>
  )
}

DataTable.defaultProps = {
  onCheckStatus: () => {},
  onPageChange: () => {}
}
