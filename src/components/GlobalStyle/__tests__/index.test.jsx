/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme } from '../../../../__mocks__/theme-test-utils'

import GlobalStyle from "../index";

describe('GlobalStyle', () => {
  it('should create valid snapshot', () => {
    renderWithTheme(<GlobalStyle />);
    expect(document.head).toMatchSnapshot();
  });
});
