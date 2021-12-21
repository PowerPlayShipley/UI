import Dot from "./index";

export default {
  title: 'Dot',
  component: Dot
}

const Template = (args) => (<Dot {...args} />);

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  color: 'green'
}
