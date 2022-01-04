import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from "clsx";

import Wrapper from "./Wrapper";

import Table from "../../components/Table";
import EditableCell from "../../components/EditableCell";

/**
 * @typedef {Object} RawData
 *
 * @property {string} player
 * @property {[[number]]} games
 * */

/**
 * @param {RawData[]} data
 * @returns {Object}
 * */
const createHeaders = (data) => {
  let games = 1
  data.forEach((previousValue) => {
    games = Math.max(games, previousValue.games.length)
  })

  let remainingHeaders = new Array(games).fill({
    Cell: EditableCell
  }).map((el, idx) => ({ ...el, Header: `Game ${idx + 1}`, accessor: `game${idx + 1}` }))

  return [{
    Header: 'Player',
    accessor: 'player'
  }, ...remainingHeaders]
}

/**
 * @param {RawData[]} data
 * @returns {Object}
 * */
const createData = (data) => {
  return data.map((el) => ({
    player: el.player,
    ...el.games.reduce(((previousValue, currentValue, currentIndex) => {
      return { ...previousValue, [`game${currentIndex+1}`]: currentValue }
    }), { })
  }))
}

const  FinesTable = ({ data: values, onToolbarClick, onItemClick, ...rest }) => {
  const columns = useMemo(() => createHeaders(values), [values])
  const data = useMemo(() => createData(values), [values])

  return (
    <Wrapper {...rest}>
      <Table data={data} columns={columns} onToolbarClick={onToolbarClick} onItemClick={onItemClick} toolbarFloat='right' />
    </Wrapper>
  )
}

export default FinesTable
