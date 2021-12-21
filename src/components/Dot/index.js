import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useTheme } from "styled-components";

import Wrapper from './Wrapper'

const sizeToScaleSwitch = (size, scaleMap) => {
  return size === 'sm' ? scaleMap['size-1'] : size === 'md' ? scaleMap['size-2'] : scaleMap['size-3']
}

function Dot ({ className, size = 'md', color = '#bbb', ...rest }) {
  const { main: { sizes: { scale } } } = useTheme()
  return <Wrapper className={clsx(className)} size={sizeToScaleSwitch(size, scale)} color={color} {...rest} />
}

Dot.propTypes = {
  size: PropTypes.oneOf([
    'sm', 'md', 'lg'
  ]),
  color: PropTypes.string
}

export default Dot
