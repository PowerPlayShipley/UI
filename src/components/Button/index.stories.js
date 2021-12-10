import Button from "./index";

export default {
  title: 'Button',
  component: Button
}

const Template = (args) => (<Button {...args} />);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  state: 'default'
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
  state: 'primary'
}

export const Outline = Template.bind({});
Outline.args = {
  title: 'Outline',
  state: 'outline'
}

export const Danger = Template.bind({});
Danger.args = {
  title: 'Danger',
  state: 'danger'
}

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled',
  state: 'default',
  disabled: true
}
