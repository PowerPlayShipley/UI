import React, { useMemo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

import Dot from '../Dot'

import tooltip from "../../utils/tooltip";

function DotGroup ({ className, tooltip: tt, dots, size = 'md', ...rest }) {
  // Map to the correct object
  const dotObject = useMemo(() => {
    return dots.map((el) => typeof el === 'string' ? ({ color: el, size }) : el)
  }, [dots, size])

  return (
    <Wrapper className={clsx(className)} {...tooltip(tt)} {...rest}>{
      dotObject.map((el, idx) => (
        <Dot key={idx} data-testid='dotitem' {...el} />
      ))}
    </Wrapper>
  )
}

DotGroup.propTypes = {
  // Add a grouped tooltip
  tooltip: PropTypes.object,
  dots: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.exact({
        size: PropTypes.oneOf([
          'sm', 'md', 'lg'
        ]),
        color: PropTypes.string
      }),
      PropTypes.string
    ])
  ).isRequired,
  // Allow for a generalised size when passing colors as the dots proptype
  size: PropTypes.oneOf([
    'sm', 'md', 'lg'
  ])
}

export default DotGroup
