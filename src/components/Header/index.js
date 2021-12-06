/**
 *
 * Header.js
 *
 * Header wrapper to handle any header needed.
 *
 * Any sub css needed, just import { Component } and
 * place inside the styled-component
 *
 * */

import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

import typography from '../../themes/typography'

const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const headerLevels = Object.keys(typography.headers)
const htmlElement = (level) => elements.includes(level)
const className = (level) => htmlElement(level) ? null : level

/**
 * Slightly messy but will work
 *
 * If we have a html element we don't need to set the
 * className as the css will already be set as is
 *
 * If children is set we use that over a title
 * */
const Header = (props) => (
  <Wrapper
    as={props.as ? props.as : htmlElement(props.level) ? props.level : 'div'}
    className={clsx(props.as ? props.as : htmlElement(props.level)  ? props.level : className(props.level), props.className)}
  >
    {props.children ? props.children : props.title}
  </Wrapper>
)

Header.defaultProps = {
  level: 'h1'
}

Header.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  level: PropTypes.oneOf(headerLevels),
  title: PropTypes.string,
  children: PropTypes.node
}

export default Header
export { Wrapper }
