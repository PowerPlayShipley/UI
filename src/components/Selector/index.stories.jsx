import React, { useRef } from 'react'
import { Selector, ModalSelector } from "./index";
import Button from "../Button";

export default {
  title: 'Selector',
  component: Selector
}

const Template = ({ items, length, ...rest }) => {
  const arr = Array.from({ length }, () => items[getRandomInt(items.length)])
  return (<Selector items={arr} {...rest} />);
}

export const Default = Template.bind({});
Default.args = {
  length: 100,
  title: 'Default',
  items: [ "😴", "😄", "😃", "⛔", "🎠", "🚓", "🚇"]
}

export const Tooltip = Template.bind({})
Tooltip.args = {
  length: 50,
  title: 'Tooltip',
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

const Wrapped = ({ items, length, width, ...rest }) => {
  const arr = Array.from({ length }, () => items[getRandomInt(items.length)])
  return (
    <div style={{ width: width, margin: '8px auto', alignSelf: 'flex-start' }}>
      <Selector items={arr} {...rest} />
    </div>
  );
}

export const WrappedDiv = Wrapped.bind({})
WrappedDiv.args = {
  length: 100,
  title: 'Wrapped Div',
  width: '62vw',
  items: [ "😴", "😄", "😃", "⛔", "🎠", "🚓", "🚇"]
}

export const WrappedDivTooltip = Wrapped.bind({})
WrappedDivTooltip.args = {
  length: 100,
  title: 'Wrapped Tooltip',
  width: '62vw',
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

const Modal = ({ items, length, width, onCloseClicked, ...rest }) => {
  const arr = Array.from({ length }, () => items[getRandomInt(items.length)])

  const ref = useRef(null)

  return (
    <>
      <Button title={'Toggle Modal'} onClick={() => ref.current.open()} />
      <ModalSelector style={{ alignSelf: 'center', margin: '8px auto', width }} defaultOpen={false} onCloseClicked={() => ref.current.close()} items={arr} ref={ref} {...rest} />
    </>
  );
};

export const DefaultModal = Modal.bind({})
DefaultModal.args = {
  length: 100,
  title: 'Modal',
  width: '62vw',
  items: [ "😴", "😄", "😃", "⛔", "🎠", "🚓", "🚇"]
}

export const TooltipModal = Modal.bind({})
TooltipModal.args = {
  length: 100,
  title: 'Modal',
  width: '62vw',
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
