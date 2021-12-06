import Cell from "./index";

export default {
  title: 'Cell/Cell',
  component: Cell
}

const Template = ({row, column, ...rest}) => {
  return (<Cell row={{ index: row }} column={{ id: column }} {...rest} />);
}

export const Default = Template.bind({});
Default.args = {
  row: 1,
  column: 1,
  value: ['A', 'B', 'C'].join(' ')
}
