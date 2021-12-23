import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import Button from "./index";

export default {
  title: 'Button',
  component: Button
}

const Template = (args) => (<Button {...args} />);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  state: 'default',
  disabled: false,
  as: 'button'
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
  state: 'primary',
  disabled: false,
  as: 'button'
}

export const Outline = Template.bind({});
Outline.args = {
  title: 'Outline',
  state: 'outline',
  disabled: false,
  as: 'button'
}

export const Danger = Template.bind({});
Danger.args = {
  title: 'Danger',
  state: 'danger',
  as: 'button'
}

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled',
  state: 'default',
  disabled: true,
  as: 'button'
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  state: 'primary',
  icon: <FontAwesomeIcon style={{ marginRight: '4px' }} icon={faPlus} />,
  title: " New",
  disabled: false,
  as: 'a'
}

export const UsingChildren = (args) => (
  <Button {...args}>
    Children
  </Button>
)
UsingChildren.args = {
  state: 'primary',
  disabled: false,
  as: 'button'
}
