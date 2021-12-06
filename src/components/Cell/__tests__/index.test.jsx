/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme, render, screen } from '../../../../__mocks__/theme-test-utils'

import Cell from "../index";

describe('Display Cell', () => {
  it('should render cell', () => {
    const { container } = renderWithTheme(<Cell column={{ id: 1 }} row={{ index: 1 }} value={'Hello'} />)
    expect(container).toHaveTextContent('Hello')
  })

  it('should create valid snapshot', function () {
    const { container } = renderWithTheme(<Cell column={{ id: 1 }} row={{ index: 1 }} value={'Hello'} />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should rerender when value changes', function () {
    const { rerender } = render(<Cell column={{ id: 1 }} row={{ index: 1 }} value={'Hello'} />)
    expect(screen.getByTestId('cell-value')).toHaveTextContent('Hello')

    rerender(<Cell column={{ id: 1 }} row={{ index: 1 }} value={'Hello World'} />)
    expect(screen.getByTestId('cell-value')).toHaveTextContent('Hello World')
  });
})
