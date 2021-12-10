/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme, fireEvent } from '../../../../__mocks__/theme-test-utils'

import Cell from "../index";

describe('Editable Cell', () => {
  it('should render cell', () => {
    const { container } = renderWithTheme(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} />)
    expect(container).toHaveTextContent('Hello')

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('fa-donate')
  });

  it('should render disabled button', function () {
    const { container } = renderWithTheme(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} disabled={true} />)
    expect(container).toHaveTextContent('Hello')

    const button = container.querySelector('button')
    expect(button).toBeDisabled()
  });

  it('should handle toolbar click', function () {
    const handleClick = jest.fn()

    const { container } = renderWithTheme(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} onToolbarClick={handleClick} />)

    fireEvent.click(container.querySelector('svg'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should handle item click', function () {
    const handleClick = jest.fn()

    const { getByText } = renderWithTheme(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} onItemClick={handleClick} />)

    fireEvent.click(getByText('Hello').parentNode)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should create valid snapshot', function () {
    const { container } = renderWithTheme(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} />)
    expect(container.firstChild).toMatchSnapshot()
  });
})
