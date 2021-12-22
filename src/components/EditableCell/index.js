/**
 * This is the cell to add and remove elements from the table. Essentially a wrapper around
 * <ItemGrid /> to help keep the items in place etc. So any changes in ItemGrid will affect here.
 *
 * @note Tests should show that
 * */

import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons"

import Wrapper from "./Wrapper";

import ItemGrid from "../ItemGrid";

const EditableCell = ({ value, row, column, onToolbarClick, onItemClick, toolbarFloat = 'left', disabled = false, ...rest}) => {
  // Pass the Toolbar button press back up the chain
  const handleToolbarClick = useCallback((_, index) => {
    onToolbarClick && onToolbarClick(index, value, row, column)
  }, [onToolbarClick, value, row, column])

  // Pass the item press back up the chain
  const handleItemClick = useCallback((_, index) => {
    onItemClick && onItemClick(index, value, row, column)
  }, [onItemClick, value, row, column])

  const renderToolbarButton = (float) => {
    return (float === toolbarFloat) && ({
      name: 'toolbar',
      className: 'toolbar',
      value: <FontAwesomeIcon icon={faDonate} />
    })
  }

  return (
    <Wrapper {...rest} toolbarFloat={toolbarFloat}>
      <ItemGrid className='editable' items={value} onClick={handleItemClick} disabled={disabled}>
        {({ items, createItem }) => (
            <>
              {createItem(renderToolbarButton('left'), 'toolbar', handleToolbarClick)}
              {items()}
              {createItem(renderToolbarButton('right'), 'toolbar', handleToolbarClick)}
            </>
          )
        }
      </ItemGrid>
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
