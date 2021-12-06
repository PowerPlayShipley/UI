import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

// Going to keep these so we can add them to the span bellow just for prosperity
const Cell = ({ value: initialValue, row: { index }, column: { id }}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <Wrapper data-testid="cell-value" data-row={index} data-column={id}>{value}</Wrapper>
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  row: PropTypes.shape({
    index: PropTypes.number
  }).isRequired,
  column: PropTypes.shape({
    id: PropTypes.number
  }).isRequired
}

export default Cell
