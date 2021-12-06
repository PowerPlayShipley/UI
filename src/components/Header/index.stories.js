import { action } from "@storybook/addon-actions";

import Header from "./index";

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    as: {
      options: [null, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' }
    },
    level: {
      options: [null, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' }
    }
  }
}

const Template = (args) => {
  return <Header {...args} />
}

export const H1 = Template.bind({});
H1.args = {
  title: 'Header',
  as: 'h1'
}

export const H2 = Template.bind({});
H2.args = {
  title: 'Header',
  as: 'h2'
}

export const H3 = Template.bind({});
H3.args = {
  title: 'Header',
  as: 'h3'
}

export const H4 = Template.bind({});
H4.args = {
  title: 'Header',
  as: 'h4'
}

export const H5 = Template.bind({});
H5.args = {
  title: 'Header',
  as: 'h5'
}

export const H6 = Template.bind({});
H6.args = {
  title: 'Header',
  as: 'h6'
}

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (<button type="button" onClick={action('Clicked Children')}>Children</button>)
}
