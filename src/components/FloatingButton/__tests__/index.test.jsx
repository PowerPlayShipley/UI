/**
 * @jest-environment jsdom
 */

import React from 'react'
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import { renderWithTheme, fireEvent } from '../../../../__mocks__/theme-test-utils'

import FloatingButton from "../index";

describe('Display Button', () => {
  it('should render button', () => {
    const { container } = renderWithTheme(<FloatingButton icon={faPlus} />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('fa-plus')
  })

  it('should create valid snapshot', function () {
    const { container } = renderWithTheme(<FloatingButton icon={faPlus} />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should fire button', function () {
    const handleClick = jest.fn()

    const { container } = renderWithTheme(<FloatingButton icon={faPlus} onClick={handleClick} />)

    fireEvent.click(container.querySelector('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
})
