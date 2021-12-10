import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";
import { Icon, Item, Group } from './components'

import tooltip from "../../utils/tooltip";

// Get the element if an object is passed not a value
const get = (element) => (typeof element === 'object' && element.value) ? element.value : element

const ItemGrid = ({ items, onClick }) => {
  const handleClick = useCallback((e, item, idx) => {
    e.preventDefault()
    onClick && onClick(item, idx)
  }, [onClick])

  return (
    <Wrapper>
      <Group>
        {items.map((item, idx) => (
          <Item data-item={get(item)} {...tooltip(item)} key={idx} onClick={(e) => handleClick(e, item, idx)}>
            <Icon>{get(item)}</Icon>
          </Item>
        ))}
      </Group>
    </Wrapper>
  )
}

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        tooltip: PropTypes.string
      })
    ])
  ).isRequired,
  onClick: PropTypes.func
}

export default ItemGrid
