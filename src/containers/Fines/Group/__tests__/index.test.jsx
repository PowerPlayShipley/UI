/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme, fireEvent } from '../../../../../__mocks__/theme-test-utils'

import FinesGroup from "../index";
import ConfigurationProvider from "../../../ConfigurationProvider";

const renderWithConfig = (fn, configuration, opts) => {
  return renderWithTheme((
    <ConfigurationProvider configuration={configuration}>
      {fn()}
    </ConfigurationProvider>
  ), opts)
}

const configuration = {
  players: {
    'AA': {
      name: 'Ade'
    }
  },
  fines: {
    H: {
      name: 'Hanging',
      cost: 50
    },
    R: {
      name: 'Reverse',
      cost: 50
    }
  }
}

const data = [
  {
    player: 'AA',
    games: [["H"]]
  }
]

describe('Display FinesGroup', function () {
  it('should create a valid snapshot', function () {
    const { container } = renderWithConfig(() => <FinesGroup title='Players' data={data} />, configuration)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should create valid buttons', function () {
    const handleClick = jest.fn()

    const { getByText } = renderWithConfig(() => <FinesGroup title='Players' data={data} onFineRemoved={handleClick} />, configuration)

    fireEvent.click(getByText('H').parentNode)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('should create valid toolbar', function () {
    const handleClick = jest.fn()

    const { container, getByText } = renderWithConfig(() => <FinesGroup title='Players' data={data} onFineAdded={handleClick} />, configuration)

    fireEvent.click(container.querySelector('svg'))
    fireEvent.click(getByText('R').parentNode)

    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('should create valid open modal snapshot', function () {
    const handleClick = jest.fn()

    const { container } = renderWithConfig(() => <FinesGroup title='Players' data={data} onFineAdded={handleClick} />, configuration)

    fireEvent.click(container.querySelector('svg'))
    expect(container).toMatchSnapshot()
  });
})
