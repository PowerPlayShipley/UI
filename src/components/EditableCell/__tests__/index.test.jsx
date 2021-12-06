/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'

import Cell from "../index";

describe('Editable Cell', () => {
  it('should render cell', () => {
    const { container } = render(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} />)
    expect(container).toHaveTextContent('Hello')

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('fa-donate')
  });

  it('should render disabled button', function () {
    const { container } = render(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} disabled={true} />)
    expect(container).toHaveTextContent('Hello')

    const button = container.querySelector('button')
    expect(button).toBeDisabled()
  });

  it('should handle click', function () {
    // const { container } = render(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} onToolbarClick={} />)
  })

  it('should create valid snapshot', function () {
    const { container } = render(<Cell column={{ id: 1 }} row={{ index: 1 }} value={['Hello']} />)
    expect(container.firstChild).toMatchSnapshot()
  });
})
