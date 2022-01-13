/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme, fireEvent } from '../../../../../__mocks__/theme-test-utils'

import FinesTable from "../index";
import ConfigurationProvider from "../../../ConfigurationProvider";

const configuration = {
  fines: {},
  players: {
    AA: {
      name: 'Ade'
    },
    TC: {
      name: 'Tom Collins'
    },
    JD: {
      name: 'Jamie'
    }
  }
}

const renderWithConfig = (fn, configuration, opts) => {
  return renderWithTheme((
    <ConfigurationProvider configuration={configuration}>
      {fn()}
    </ConfigurationProvider>
  ), opts)
}

describe('Display FinesTable', function () {
  it('should create a valid snapshot', function () {
    const data = [
      {
        player: 'AA',
        games: [["H"], ["D", "H", "D", "D"], ["R"]]
      },
      {
        player: 'TC',
        games: [[], ["H"], ["R"]]
      },
      {
        player: 'JD',
        games: [["H", "D", "H", "D", "D"], ["D", "H"], ["R"]]
      }
    ]

    const { container } = renderWithConfig(() => <FinesTable data={data} />, configuration)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should create valid buttons', function () {
    const handleClick = jest.fn()

    const data = [
      {
        player: 'AA',
        games: [
          ['H']
        ]
      }
    ]

    const { getByText } = renderWithConfig(() => <FinesTable data={data} onItemClick={handleClick} />, configuration)

    fireEvent.click(getByText('H').parentNode)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('should create valid toolbar', function () {
    const handleClick = jest.fn()

    const data = [
      {
        player: 'AA',
        games: [
          ['H']
        ]
      }
    ]

    const { container } = renderWithConfig(() => <FinesTable data={data} onToolbarClick={handleClick} />, configuration)

    fireEvent.click(container.querySelector('svg'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});
