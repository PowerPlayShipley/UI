/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme } from '../../../../__mocks__/theme-test-utils'

import DotGroup from "../index";

describe('Display Dot', () => {
  it('should render dot', async function () {
    const { findAllByTestId } = renderWithTheme(<DotGroup dots={['red', 'green', 'blue']} />)
    expect(await findAllByTestId('dotitem')).toHaveLength(3)
  });

  it('should create valid snapshot', () => {
    const { container } = renderWithTheme(<DotGroup dots={['red', 'green', 'blue']} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
