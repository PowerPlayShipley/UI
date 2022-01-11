import React from 'react'
import { action } from "@storybook/addon-actions";

import FinesGroup from "./index";
import useFinesConfiguration from "../../hooks/useFinesConfiguration";

export default {
  title: 'Fines/Group',
  component: FinesGroup
}

const Template = ({ configuration, data, ...args }) => {
  const { finesConfiguration } = useFinesConfiguration(configuration)
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '16px 16px' }}>
      <FinesGroup configuration={finesConfiguration} data={data} {...args} />
    </div>
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
  onFineAdded: action('onFineAdded'),
  onFineRemoved: action('onFineRemoved'),
}

