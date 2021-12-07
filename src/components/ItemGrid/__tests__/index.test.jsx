/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme } from '../../../../__mocks__/theme-test-utils'

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
})
