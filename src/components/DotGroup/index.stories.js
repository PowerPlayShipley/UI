import DotGroup from "./index";

export default {
  title: 'Dot/Group',
  component: DotGroup
}

const Template = (args) => (<DotGroup {...args} />);

export const Default = Template.bind({});
Default.args = {
  dots: ['red', 'green', 'blue'],
  size: 'md',
  tooltip: {
    tooltip: 'Includes Tooltip'
  }
}

export const Latency = Template.bind({});
Latency.args = {
  dots: ['green', 'green', 'green', 'grey'],
  size: 'lg',
  tooltip: {
    tooltip: '30ms'
  }
}
