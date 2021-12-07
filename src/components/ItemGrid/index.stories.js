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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
