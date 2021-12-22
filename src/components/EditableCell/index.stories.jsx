import { action } from "@storybook/addon-actions";

import EditableCell from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Cell/EditableCell',
  component: EditableCell
}

const Template = ({row, column, ...rest}) => {
  return (<EditableCell row={{ index: row }} column={{ id: column }}
                        onToolbarClick={action('Toolbar Clicked!')} onItemClick={action('Item Clicked!')} {...rest} />);
}

export const Enabled = Template.bind({});
Enabled.args = {
  row: 1,
  column: 1,
  value: ['A', 'B', 'C'],
  disabled: false
}

export const Disabled = Template.bind({});
Disabled.args = {
  row: 1,
  column: 1,
  value: ['A', 'B', 'C'],
  disabled: true
}

export const RightFloat = Template.bind({});
RightFloat.args = {
  row: 1,
  column: 1,
  value: ['A', 'B', 'C'],
  disabled: false,
  toolbarFloat: 'right'
}

export const RightFloatDisabled = Template.bind({});
RightFloatDisabled.args = {
  row: 1,
  column: 1,
  value: ['A', 'B', 'C'],
  disabled: true,
  toolbarFloat: 'right'
}

export const RightLargeValues = Template.bind({});
RightLargeValues.args = {
  row: 1,
  column: 1,
  value: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],
  disabled: false,
  toolbarFloat: 'right'
}
