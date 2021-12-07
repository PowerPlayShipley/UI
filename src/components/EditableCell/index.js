/**
 * This is the cell to add and remove elements from the table
 * */

import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons"

import Wrapper from "./Wrapper";
import { Toolbar, ToolbarButton, ItemButton }  from './components'
import Cell from "../Cell";

const EditableCell = ({ value, row, column, onToolbarClick, onItemClick, toolbarFloat = 'left', disabled = false, ...rest}) => {
  // Pass the Toolbar button press back up the chain
  const handleToolbarClick = useCallback((e) => {
    e.preventDefault()
    onToolbarClick && onToolbarClick(e, value, row, column)
  }, [onToolbarClick, value, row, column])

  // Pass the item press back up the chain
  const handleItemClick = useCallback((index) => {
    onItemClick && onItemClick(index, value, row, column)
  }, [onItemClick, value, row, column])

  return (
    <Wrapper {...rest}>
      {toolbarFloat === 'left' && (
        <Toolbar>
          <ToolbarButton disabled={disabled} type="button" onClick={handleToolbarClick}>
            <FontAwesomeIcon icon={faDonate} />
          </ToolbarButton>
        </Toolbar>
      )}
      {value.map((value, idx) => (
        <ItemButton disabled={disabled} key={`${row.index}.${column.id}.${idx}`} type="button" onClick={(e) => { e.preventDefault(); handleItemClick(idx) }}>
          <Cell value={value} column={column} row={row} />
        </ItemButton>
      ))}
      {toolbarFloat === 'right' && (
        <Toolbar toolbarFloat={toolbarFloat}>
          <ToolbarButton disabled={disabled} type="button" onClick={handleToolbarClick}>
            <FontAwesomeIcon icon={faDonate} />
          </ToolbarButton>
        </Toolbar>
      )}
    </Wrapper>
  )
}

EditableCell.propTypes = {
  value: PropTypes.array.isRequired,
  toolbarFloat: PropTypes.oneOf(['left', 'right']),
  row: PropTypes.shape({
    index: PropTypes.number
  }).isRequired,
  column: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  onToolbarClick: PropTypes.func,
  onItemClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default EditableCell
