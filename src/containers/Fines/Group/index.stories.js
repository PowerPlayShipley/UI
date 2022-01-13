import React from 'react'
import { action } from "@storybook/addon-actions";

import Group from "./index";
import ConfigurationProvider from "../../ConfigurationProvider";

export default {
  title: 'Fines/Group',
  component: Group
}

const Template = ({ configuration, data, ...args }) => {
  return (
    <ConfigurationProvider configuration={configuration}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '16px 16px' }}>
        <Group data={data} {...args} />
      </div>
    </ConfigurationProvider>
  )
};

export const Default = Template.bind({});
Default.args = {
  title: 'Players',
  configuration: {
    players: {
      'HW': {
        name: 'Harry'
      },
      'SK': {
        name: 'Ste'
      }
    },
    fines: {
      H: {
        name: 'Hanging',
        cost: 50
      },
      D: {
        name: 'Diagonal Hanging',
        cost: 50
      },
      R: {
        name: 'Reverse',
        cost: 50
      }
    }
  },
  data: [
    {
      player: 'HW',
      games: [["H"], ["D", "H", "D", "D"], ["R"]]
    },
    {
      player: 'SK',
      games: [[], ["H"], ["R"]]
    }
  ],
  onFineAdded: action('onFineAdded'),
  onFineRemoved: action('onFineRemoved'),
}

