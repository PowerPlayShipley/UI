/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderWithTheme } from '../../../../__mocks__/theme-test-utils'

import Table from "../index";

describe('Display Table', () => {
  it('should create valid snapshot', () => {
    const cols = [
      {
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Age',
        accessor: 'age'
      }
    ]

    const data = [{
      name: 'John Smith',
      age: 21
    }, {
      name: 'Jack Smith',
      age: 66
    }]

    const { container } = renderWithTheme(<Table data={data} columns={cols} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
