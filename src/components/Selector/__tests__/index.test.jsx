/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, renderWithTheme } from '../../../../__mocks__/theme-test-utils'

import { Selector } from "../index";
import ItemGrid from "../../ItemGrid";

describe('Display Button', () => {
  it('should render cell', () => {
    const { container } = renderWithTheme(<Selector title={'Hello'} items={[]}/>)
    expect(container).toHaveTextContent('Hello')
  })

  it('should create valid snapshot', function () {
    const { container } = renderWithTheme(<Selector title={'Hello'} items={[]}/>)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should load correct amount of items', function () {
    const items = ['1', '2', '3', '4']
    const { container, getByText } = renderWithTheme(<Selector title={'Hello'} items={items} />)

    for (const item of items) {
      const child = getByText(item)
      expect(container).toContainElement(child)
    }
  });

  it('should fire an event on item clicked', function () {
    const handleClick = jest.fn()

    const { getByText } = renderWithTheme(<Selector items={['1']} title={'Hello'} onItemClicked={handleClick} />)

    fireEvent.click(getByText('1').parentElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('should fire an event on close clicked', function () {
    const handleClick = jest.fn()

    const { getByText } = renderWithTheme(<Selector items={['1']} title={'Hello'} onCloseClicked={handleClick} />)

    fireEvent.click(getByText('Close'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
})
