import { faPlus } from "@fortawesome/free-solid-svg-icons"

import FloatingButton from "./index";

export default {
  title: 'Button/Floating',
  component: FloatingButton
}

const Template = (args) => (<FloatingButton {...args} />);

export const Default = Template.bind({});
Default.args = {
  icon: faPlus,
  ripple: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  icon: faPlus,
  disabled: true,
  ripple: true
}

export const NoneRipple = Template.bind({});
NoneRipple.args = {
  icon: faPlus,
  ripple: false
}
