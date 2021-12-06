import { action } from "@storybook/addon-actions";

import EditableCell from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Cell/EditableCell',
  component: EditableCell
}

const Template = ({row, column, ...rest}) => {
  return (<EditableCell style={{ height: '30px' }} row={{ index: row }} column={{ id: column }}
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
