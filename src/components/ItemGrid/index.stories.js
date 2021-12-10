import ItemGrid from "./index";

export default {
  title: 'ItemGrid',
  component: ItemGrid
}

const Template = ({ items, length, ...rest }) => {
  const arr = Array.from({ length }, () => items[getRandomInt(items.length)])
  return (<ItemGrid items={arr} {...rest} />);
}

export const Default = Template.bind({});
Default.args = {
  length: 100,
  items: [ "😴", "😄", "😃", "⛔", "🎠", "🚓", "🚇"]
}

export const Tooltip = Template.bind({})
Tooltip.args = {
  length: 50,
  items: [{
    value: "😀",
    tooltip: 'Grinning face'
  }, {
    value: '🥰',
    tooltip: 'Smiling face with hearts'
  }, {
    value: '👁',
    tooltip: 'Eye'
  }, {
    value: '🌗',
    tooltip: 'Last quarter moon'
  }, {
    value: '🌎',
    tooltip: 'Globe showing Americas'
  }]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
