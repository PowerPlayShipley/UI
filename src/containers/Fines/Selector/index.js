/**
 * Small wrapper for `ModalSelector` that will be styled accordingly
 * */

import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { ModalSelector } from "../../../components/Selector";
import useConfiguration from "../../../hooks/useConfiguration";

// Adjust this when needed
const initialStyle = { alignSelf: 'center', margin: '8px auto', minWidth: '200px' }

const Selector = forwardRef(({ style = initialStyle, onItemClicked, onCloseClicked }, ref) => {
  const { fines } = useConfiguration()

  return <ModalSelector title='Select Fines' style={style} ref={ref} onItemClicked={onItemClicked}
                        onCloseClicked={onCloseClicked} items={fines} defaultOpen={false} />
})

Selector.displayName = 'Fines.Selector'

export const propTypes = {
  style: PropTypes.object,
  onItemClicked: PropTypes.func.isRequired,
  onCloseClicked: PropTypes.func.isRequired
}

export default Selector

