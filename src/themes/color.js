import { hexToRGB } from './utils'
import colorSystem from './color-system/light'

/**
 * Todo: Create this dynamically with a function that takes a colour system
 *       as the param
 * */

// defaults

const defaults = {
  black: colorSystem.grays['900'],
  blackBright: colorSystem.grays['600'],
  white: colorSystem.grays['500'],
  whiteBright: colorSystem.grays['400'],
  gray: colorSystem.grays['500'],
  red: colorSystem.reds['500'],
  redBright: colorSystem.reds['600'],
  green: colorSystem.greens['600'],
  greenBright: colorSystem.greens['500'],
  yellow: colorSystem.yellows['800'],
  yellowBright: colorSystem.yellows['700'],
  blue: colorSystem.blues['500'],
  blueBright: colorSystem.blues['400'],
  cyan: '#1b7c83',
  cyanBright: '#3192aa'
}

// Backgrounds

const backgrounds = {
  default: colorSystem.grays['000'],
  primary: colorSystem.blues['500'],
  success: colorSystem.greens['400'],
  danger: colorSystem.reds['600']
}

// Border-colors

const border = {
  default: colorSystem.grays['200'],
  muted: `lighten(${colorSystem.grays['200']}, 3%)`,
  subtle: `rgba(${hexToRGB(colorSystem.grays['200'])}, 0.5)`
}

// Text

const text = {
  default: defaults.black,
  muted: defaults.blackBright,
  subtle: defaults.white,
  disabled: defaults.whiteBright,
  white: colorSystem.white
}


// Export

const colors = {
  backgrounds,
  defaults,
  border,
  text,
  system: colorSystem
}

export default colors
