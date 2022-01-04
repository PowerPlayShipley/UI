/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme, fireEvent } from '../../../../__mocks__/theme-test-utils'

import FinesTable from "../index";

describe('Display FinesTable', function () {
  it('should create a valid snapshot', function () {
    const data = [
      {
        player: 'Ade',
        games: [["H"], ["D", "H", "D", "D"], ["R"]]
      },
      {
        player: 'Tom Collins',
        games: [[], ["H"], ["R"]]
      },
      {
        player: 'Jamie',
        games: [["H", "D", "H", "D", "D"], ["D", "H"], ["R"]]
      }
    ]

    const { container } = renderWithTheme(<FinesTable data={data} />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should create valid buttons', function () {
    const handleClick = jest.fn()

    const data = [
      {
        player: 'Ade',
        games: [
          ['H']
        ]
      }
    ]

    const { getByText } = renderWithTheme(<FinesTable data={data} onItemClick={handleClick} />)

    fireEvent.click(getByText('H').parentNode)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('should create valid toolbar', function () {
    const handleClick = jest.fn()

    const data = [
      {
        player: 'Ade',
        games: [
          ['H']
        ]
      }
    ]

    const { container } = renderWithTheme(<FinesTable data={data} onToolbarClick={handleClick} />)

    fireEvent.click(container.querySelector('svg'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});
