/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, renderWithTheme, screen } from '../../../../__mocks__/theme-test-utils'

import ItemGrid from "../index";

describe('Item Grid', () => {
  it('should create valid snapshot', function () {
    const { container } = renderWithTheme(<ItemGrid items={['1', '2', '3', '4']} />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should load correct amount of items', function () {
    const items = ['1', '2', '3', '4']
    const { container, getByText } = renderWithTheme(<ItemGrid items={items} />)

    for (const item of items) {
      const child = getByText(item)
      expect(container).toContainElement(child)
    }
  });

  it('should set the tooltip value', function () {
    const items = [{ value: '55', tooltip: 'Fifty Five' }]

    const { getByText } = renderWithTheme(<ItemGrid items={items} />)
    expect(getByText('55').parentElement).toHaveAttribute('data-tip', 'Fifty Five')
  });

  it('should fire an event', function () {
    const handleClick = jest.fn()

    const { getByText } = renderWithTheme(<ItemGrid items={['1']} onClick={handleClick} />)

    fireEvent.click(getByText('1').parentElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
})
