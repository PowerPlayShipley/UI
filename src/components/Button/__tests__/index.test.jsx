/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme, fireEvent } from '../../../../__mocks__/theme-test-utils'

import Button from "../index";

describe('Display Button', () => {
  it('should render cell', () => {
    const { container } = renderWithTheme(<Button title={'Hello'} />)
    expect(container).toHaveTextContent('Hello')
  })

  it('should create valid snapshot', function () {
    const { container } = renderWithTheme(<Button title={'Hello'} />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should fire button', function () {
    const handleClick = jest.fn()

    const { container } = renderWithTheme(<Button title={'Hello'} onClick={handleClick} />)

    fireEvent.click(container.querySelector('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it(`should create valid button state - default`, function () {
    const { container } = renderWithTheme(<Button title={'Hello'} state={'default'} />)
    expect(container.firstChild).toHaveClass('default')
  });

  it(`should create valid button state - primary`, function () {
    const { container } = renderWithTheme(<Button title={'Hello'} state={'primary'} />)
    expect(container.firstChild).toHaveClass('primary')
  });

  it(`should create valid button state - outline`, function () {
    const { container } = renderWithTheme(<Button title={'Hello'} state={'outline'} />)
    expect(container.firstChild).toHaveClass('outline')
  });

  it(`should create valid button state - danger`, function () {
    const { container } = renderWithTheme(<Button title={'Hello'} state={'danger'} />)
    expect(container.firstChild).toHaveClass('danger')
  });

  it(`should create valid button - div`, function () {
    const { container } = renderWithTheme(<Button title={'Hello'} as={'div'} />)
    expect(container.firstChild.nodeName).toBe('DIV')
  });

  it(`should create valid button - link`, function () {
    const { container } = renderWithTheme(<Button title={'Hello'} as={'a'} />)
    expect(container.firstChild.nodeName).toBe('A')
  });

  it(`should create valid button - button`, function () {
    const { container } = renderWithTheme(<Button title={'Hello'} as={'button'} />)
    expect(container.firstChild.nodeName).toBe('BUTTON')
  });
})
