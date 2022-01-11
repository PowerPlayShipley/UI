/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { renderWithTheme, fireEvent } from '../../../../__mocks__/theme-test-utils'

import FinesGroup from "../index";
import useFinesConfiguration from "../../../hooks/useFinesConfiguration";

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
    const { result } = renderHook(() => useFinesConfiguration(configuration))

    const { container } = renderWithTheme(<FinesGroup title='Players' data={data} configuration={result.current.finesConfiguration} />)
    expect(container.firstChild).toMatchSnapshot()
  });

  it('should create valid buttons', function () {
    const handleClick = jest.fn()

    const { result } = renderHook(() => useFinesConfiguration(configuration))

    const { getByText } = renderWithTheme(<FinesGroup title='Players' data={data} onFineRemoved={handleClick} configuration={result.current.finesConfiguration} />)

    fireEvent.click(getByText('H').parentNode)
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('should create valid toolbar', function () {
    const handleClick = jest.fn()

    const { result } = renderHook(() => useFinesConfiguration(configuration))

    const { container, getByText } = renderWithTheme(<FinesGroup title='Players' data={data} onFineAdded={handleClick} configuration={result.current.finesConfiguration} />)

    fireEvent.click(container.querySelector('svg'))
    fireEvent.click(getByText('R').parentNode)

    expect(handleClick).toHaveBeenCalledTimes(1)
  });
})
