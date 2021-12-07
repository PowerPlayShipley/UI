import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";
import { Icon, Item, Grid } from './components'

const ItemGrid = ({ items, onClick }) => {
  const handleClick = useCallback((e, item, idx) => {
    e.preventDefault()
    onClick && onClick(item, idx)
  }, [onClick])

  return (
    <Wrapper>
      <Grid>
        {items.map((item, idx) => (
          <Item data-item={item} key={idx} onClick={(e) => handleClick(e, item, idx)}>
            <Icon>{item}</Icon>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}

ItemGrid.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func
}

export default ItemGrid
