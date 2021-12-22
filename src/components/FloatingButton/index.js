import React from 'react'
import PropTypes from 'prop-types'
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Wrapper from "./Wrapper";

const FloatingButton = ({ className, ripple = false, icon = faPlus, ...rest}) => {
  return (
    <Wrapper className={clsx(ripple && 'ripple', className)} {...rest}>
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  )
}

FloatingButton.propTypes = {
  background: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  ripple: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.any.isRequired
}

export default FloatingButton
