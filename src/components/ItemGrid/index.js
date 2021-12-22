/**
 * ItemGrid:
 *
 * Create an item Grid, this can be created passing just values along, or with a child function.
 * Using the function allows for customisation, i.e adding prefix/suffix if the grid requires it
 * */
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import clsx from "clsx";

import Wrapper from "./Wrapper";
import { Icon, Item, Group } from './components'

import tooltip from "../../utils/tooltip";

// Get an item from element if an object or return the element itself
const get = (key, element) => (typeof element === 'object' && element[key]) ? element[key] : element
// Get the className
const getClassName = (element) => (typeof element === 'object' && element.className) ? element.className : null

// if an element is disabled independently it should not affect the rest
const disabled = (element, global) => global === true
  ? true : (typeof element === 'object' && element.disabled)
    ? element.disabled : false

const ItemGrid = ({ className, items, disabled: isDisabled = false, onClick, children }) => {
  // Only pass up if the click exists
  const handleClick = useCallback((e, item, idx) => {
    e.preventDefault()
    onClick && onClick(item, idx)
  }, [onClick])

  // Helper to allow children to add extra items to the grid outside the passed items
  const createItem = (item, idx, arr) => {
    return item && (
      <Item className={clsx(getClassName(item))} data-item={get('name', item)} {...tooltip(item)} key={idx}
            aria-disabled={disabled(item, isDisabled)} onClick={(e) =>  typeof arr === 'function' ? arr(e, item, idx) : handleClick(e, item, idx)}>
        <Icon>{get('value', item)}</Icon>
      </Item>
    )
  }

  return (
    <Wrapper className={clsx(className)}>
      <Group>
        {children ? children({
          items: () => items.map(createItem), createItem
        }) : items.map(createItem)}
      </Group>
    </Wrapper>
  )
}

const ValueProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    tooltip: PropTypes.string
  })
])

ItemGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func,
  items: PropTypes.arrayOf(ValueProps).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default ItemGrid
