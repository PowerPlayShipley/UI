import React, { useMemo } from 'react'
import { action } from "@storybook/addon-actions";

import FinesTable from "./index";

export default {
  title: 'Fines/Table',
  component: FinesTable
}

const Template = ({ data, ...args }) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '16px 16px' }}>
      <FinesTable data={data} {...args} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  data: [
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
  ],
  onToolbarClick: action('toolbarClicked'),
  onItemClick: action('itemClick'),
}
