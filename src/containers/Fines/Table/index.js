/**
 * A wrapper for `Table` to handle the fines data.
 *
 * It will take already manipulated fines data and convert them to the headers and the valid data that
 * `react-table` can read.
 * */

import React, { useMemo, memo } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

import TBL from "../../../components/Table";
import EditableCell from "../../../components/EditableCell";
import useConfiguration from "../../../hooks/useConfiguration";

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
 * @param {Object} players
 * @returns {Object}
 * */
const createData = (data, players) => {
  return data.map((el) => ({
    player: el.player in players ? players[el.player].name : el.player,
    ...el.games.reduce(((previousValue, currentValue, currentIndex) => {
      return { ...previousValue, [`game${currentIndex+1}`]: currentValue }
    }), { })
  }))
}

const Table = ({ data: values, onToolbarClick, onItemClick, ...rest }) => {
  const { players } = useConfiguration()

  const columns = useMemo(() => createHeaders(values), [values])
  const data = useMemo(() => createData(values, players), [values, players])

  return (
    <Wrapper {...rest}>
      {data.length > 0 && (<TBL className='table' data={data} columns={columns} onToolbarClick={onToolbarClick} onItemClick={onItemClick} toolbarFloat='right' />)}
    </Wrapper>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.string,
      games: PropTypes.array
    })
  ).isRequired,
  onToolbarClick: PropTypes.func,
  onItemClick: PropTypes.func
}

export default memo(Table)
