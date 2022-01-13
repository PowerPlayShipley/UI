import React from 'react'
import { action } from "@storybook/addon-actions";

import Table from "./index";

import ConfigurationProvider from "../../ConfigurationProvider";

export default {
  title: 'Fines/Table',
  component: Table
}

const Template = ({ configuration, data, ...args }) => {
  return (
    <ConfigurationProvider configuration={configuration}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '16px 16px' }}>
        <Table data={data} {...args} />
      </div>
    </ConfigurationProvider>
  )
};

export const Default = Template.bind({});
Default.args = {
  configuration: {
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
  },
  data: [
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
  ],
  onToolbarClick: action('toolbarClicked'),
  onItemClick: action('itemClick'),
}

// TODO: Add empty UI object
export const Empty = Template.bind({});
Empty.args = {
  configuration: {
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
  },
  data: [],
  onToolbarClick: action('toolbarClicked'),
  onItemClick: action('itemClick'),
}
