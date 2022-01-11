/**
 * FinesGroup is the handler for each fine's section i.e. the players/captains.
 *
 * It has to be placed inside a `ConfigProvider` this will be an auto updating configuration handler.
 * The remaining code should be able to be used in isolation, HOC to handle the updates maybe ?? Where
 * it can update its own fines data and no one else.
 * */

import React, { useRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

import FinesTable from "../FinesTable";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { ModalSelector } from "../../components/Selector";

// Just set this, so we can update the right value in the database
const getCellFromArgs = (index, value, { index: idx }, { id }) => {
  return { row: idx, col: parseInt(id.slice(-1)) }
}

const FinesGroup = ({ data, configuration, title, onFineAdded, onFineRemoved, ...rest }) => {
  const selector = useRef(null)

  // Add state management
  const [cell, setCell] = useState(null) // { row: x, col: x }

  // Handle any work when the selector has a new item
  const handleSelectorClicked = useCallback((item, _) => {
    selector.current.close()

    // Pass this up the chain
    onFineAdded && onFineAdded(item, cell)

    setCell(null)
  }, [selector, onFineAdded, cell, setCell])

  // Handle any work when an old fine has been clicked
  const handleItemClicked = useCallback((index, value, row, col) => {
    const cell = getCellFromArgs(index, value, row, col)
    onFineRemoved && onFineRemoved(index, value[index], cell)
  }, [onFineRemoved])

  // Add any rendering for the selector here. Keep it cleaner
  const renderSelector = (style) => (
    <ModalSelector style={style} title='Select Fines' defaultOpen={false} onItemClicked={handleSelectorClicked}
                   onCloseClicked={() => { selector.current.close(); setCell(null) }} ref={selector} items={configuration} />
  )

  return (
    <Wrapper {...rest}>
      <div className='meta'>
        <Header level='h2' title={title} />
        <div className='btn-group'>
          <Button title='Edit' state='primary' />
        </div>
      </div>
      <FinesTable data={data} onToolbarClick={(...args) => { setCell(getCellFromArgs(...args)); selector.current.open() }} onItemClick={handleItemClicked} />
      {renderSelector({ alignSelf: 'center', margin: '8px auto', minWidth: '200px' })}
    </Wrapper>
  )
}

FinesGroup.propTypes = {
  // Will set this properly when I know exactly where it comes from and who manipulates this from the API response
  data: PropTypes.array.isRequired,
  configuration: PropTypes.array,
  title: PropTypes.string.isRequired,
  onFineAdded: PropTypes.func,
  onFineRemoved: PropTypes.func
}

export default FinesGroup
