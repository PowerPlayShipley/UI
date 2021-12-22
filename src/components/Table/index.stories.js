import React, { useMemo } from 'react'
import { action } from "@storybook/addon-actions";

import Table from "./index";
import EditableCell from "../EditableCell";

export default {
  title: 'Table',
  component: Table
}

const Template = ({ columns, data, ...args }) => {
  const headers = useMemo(() => columns, [columns])
  const body = useMemo(() => data, [data])

  return <Table columns={headers} data={body} {...args} />
};

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Age',
      accessor: 'age'
    }
  ],
  data: [{
    name: 'John Smith',
    age: 21
  }, {
    name: 'Jack Smith',
    age: 66
  }]
}

export const EditableDefault = Template.bind({});
EditableDefault.args = {
  toolbarFloat: 'right',
  onToolbarClick: action('toolbarClicked'),
  onItemClick: action('itemClick'),
  columns: [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age',
      Cell: EditableCell
    },
    {
      Header: 'Another Thing',
      accessor: 'another',
      Cell: EditableCell
    }
  ],
  data: [
    {
      name: 'John Smith',
      age: new Array(21).fill(1),
      another: new Array(16).fill(1)
    },
    {
      name: 'Jack Smith',
      age: new Array(15).fill(1),
      another: new Array(11).fill(1)
    }
  ]
}
