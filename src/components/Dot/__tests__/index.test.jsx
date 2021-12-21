/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme } from '../../../../__mocks__/theme-test-utils'

import Dot from "../index";

describe('Display Dot', () => {
  it('should render dot', function () {
    const { container } = renderWithTheme(<Dot />)
    // Very strange but works
    expect(container).toContainHTML('</span>')
  });

  it('should create valid snapshot', () => {
    const { container } = renderWithTheme(<Dot />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
