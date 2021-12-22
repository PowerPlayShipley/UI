/**
 * Wrapper for `use-table` of `react-table`
 * */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTable } from 'react-table'

import Wrapper from "./Wrapper";
import { Columns, Column } from './props'

/**
 * The rest spread will be added to the table props as anything added in the useTable
 * options will be passed to the cell renderer so we can add out updaters here, keeping
 * this generally generic??
 * */
export default function Table ({ className, columns, data, defaultColumn, onStateChange, plugins = [], ...rest }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state
  } = useTable({ columns, data, defaultColumn, ...rest }, ...plugins)

  // Pass the state back to keep this as generic as we can
  useEffect(() => {
    onStateChange && onStateChange(state)
  }, [state, onStateChange])

  return (
    <Wrapper className={className} {...getTableProps()}>
      <thead>
      {headerGroups.map((headerGroup, i) => (
        <tr key={i} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) => (
            <th key={i} {...column.getHeaderProps()}>
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr key={i} {...row.getRowProps()}>
            {row.cells.map((cell, i) => {
              return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
      </tbody>
    </Wrapper>
  )
}

Table.propTypes = {
  className: PropTypes.string,
  columns: Columns.isRequired,
  data: PropTypes.array.isRequired,
  onStateChange: PropTypes.func,
  defaultColumn: Column,
  // Use any react-table plugins
  plugins: PropTypes.arrayOf(PropTypes.func)
}
