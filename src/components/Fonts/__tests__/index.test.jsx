/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import Fonts from "../index";

describe('Fonts', () => {
  it('should create valid snapshot', () => {
    render(<Fonts />);
    expect(document.head).toMatchSnapshot();
  });
});
