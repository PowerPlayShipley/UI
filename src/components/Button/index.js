/**
 * Todo: Look into building better theming here
 * */

import React from 'react'
import PropTypes from 'prop-types'

import clsx from "clsx";

import Wrapper from "./Wrapper";

const Button = ({ as, disabled, state, title, className, children, ...rest }) => {
  return (
    <Wrapper className={clsx(className && className, state && state)} as={as} disabled={disabled} state={state} {...rest}>
      {title && title || children}
    </Wrapper>
  )
}

Button.defaultProps = {
  as: 'button',
  disabled: false,
  state: 'default'
}

Button.propTypes = {
  as: PropTypes.oneOf(['div', 'a', 'button']),
  children: PropTypes.element,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  state: PropTypes.oneOf(['default', 'primary', 'outline', 'danger']),
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
