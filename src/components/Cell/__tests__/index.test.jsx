/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import Cell from "../index";

describe('Display Cell', () => {
  it('should render cell', () => {
    const { container } = render(<Cell column={{ id: 1 }} row={{ index: 1 }} value={'Hello'} />)
    expect(container).toHaveTextContent('Hello')
  })

  it('should create valid snapshot', function () {
    const { container } = render(<Cell column={{ id: 1 }} row={{ index: 1 }} value={'Hello'} />)
    expect(container.firstChild).toMatchSnapshot()
  });
})
