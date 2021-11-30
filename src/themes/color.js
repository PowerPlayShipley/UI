import colorSystem from './color-system'

// Border-colors

const border = {
  white: colorSystem.white,
  'white-fade': colorSystem.fades['white-15'],
  'black-fade': colorSystem.fades['black-15'],
  gray: colorSystem.grays['200'],
  'gray-dark': colorSystem.grays['300'],
  'gray-darker': colorSystem.grays['700'],
  'gray-light': `lighten(${colorSystem.grays['200']}, 3%)`,
  red: colorSystem.red,
  'red-light': colorSystem.reds['300'],
  green: colorSystem.green,
  'green-light': `lighten(${colorSystem.green}, 40%)`,
  blue: colorSystem.blue,
  'blue-light': colorSystem.reds['200']
}

// Backgrounds

const backgrounds = {
  white: colorSystem.white,
  black: colorSystem.black,
  'black-fade': colorSystem.fades['black-50'],
  gray: colorSystem.grays['100'],
  'gray-light': colorSystem.grays['000'],
  'gray-dark': colorSystem.grays['900'],
  blue: colorSystem.blue,
  'blue-light': colorSystem.blues['000'],
  green: colorSystem.green,
  'green-light': colorSystem.greens['100'],
  red: colorSystem.red,
  'red-light': colorSystem.reds['000']
}

// Text

const text = {
  black: colorSystem.black,
  white: colorSystem.white,
  gray: colorSystem.gray,
  'gray-light': colorSystem['gray-light'],
  'gray-dark': colorSystem['gray-dark'],
  blue: colorSystem.blue,
  green: colorSystem.green,
  red: colorSystem.red
}

// Export

const colors = {
  backgrounds,
  border,
  text
}

export default colors
