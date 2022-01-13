import React, { useRef } from 'react'
import { action } from "@storybook/addon-actions";

import Selector from "./index";

import Button from "../../../components/Button";
import ConfigurationProvider from "../../ConfigurationProvider";

export default {
  title: 'Fines/Selector',
  component: Selector
}

const Template = ({ configuration, onItemClicked, onCloseClicked }) => {
  const ref = useRef(null)

  return (
    <ConfigurationProvider configuration={configuration}>
        <Button title={'Toggle Modal'} onClick={() => ref.current.open()} />
        <Selector ref={ref} onItemClicked={(e) => { ref.current.close(); onItemClicked && onItemClicked(e) }}
                  onCloseClicked={(e) => { ref.current.close(); onCloseClicked && onCloseClicked(e) }} />
    </ConfigurationProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  configuration: {
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
  onItemClicked: action('onItemClicked'),
  onCloseClicked: action('onCloseClicked')
}
