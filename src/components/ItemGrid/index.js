import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import clsx from "clsx";

import Wrapper from "./Wrapper";
import { Icon, Item, Group } from './components'

import tooltip from "../../utils/tooltip";

// Get the element if an object is passed not a value
const get = (element) => (typeof element === 'object' && element.value) ? element.value : element
const name = (element) => (typeof element === 'object' && element.name) ? element.name: element
// if an element is disabled independently it should not effect the rest
const disabled = (element, global) => global === true
  ? true : (typeof element === 'object' && element.disabled)
    ? element.disabled : false

const ItemGrid = ({ className, items, disabled: isDisabled = false, onClick }) => {
  const handleClick = useCallback((e, item, idx) => {
    e.preventDefault()
    onClick && onClick(item, idx)
  }, [onClick])

  return (
    <Wrapper className={clsx(className)}>
      <Group>
        {items.map((item, idx) => (
          <Item data-item={name(get(item))} {...tooltip(item)} key={idx} aria-disabled={disabled(item, isDisabled)} onClick={(e) => handleClick(e, item, idx)}>
            <Icon>{get(item)}</Icon>
          </Item>
        ))}
      </Group>
    </Wrapper>
  )
}

ItemGrid.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]).isRequired,
        tooltip: PropTypes.string
      })
    ])
  ).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default ItemGrid
