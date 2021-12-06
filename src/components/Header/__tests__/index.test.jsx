/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from "../index";

describe('Header', () => {
  it('should display header', () => {
    render(<Header as={'h1'} title={'Hello World'} />)
    expect(screen.getByRole('heading')).toHaveTextContent('Hello World')
  })

  it('should have `as` set to `h5`', () => {
    const { container } = render(<Header as={'h5'} title={'Hello World'} />)

    const header = container.querySelector('h5')
    expect(header).toHaveClass('h5')

    expect(container.firstChild).toMatchSnapshot()
  })
});
