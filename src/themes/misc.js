import colors from './color'
import colorSystem from './color-system/light'
import { hexToRGB } from './utils'

// Border
const borderWidth = '1px'
const borderStyle = 'solid'
const borderWithColor = (color) => `${borderWidth} ${color} ${borderStyle}`
const border = borderWithColor(colors.border.subtle)

// Border Radius
const radius = {
  1: '4px',
  2: '6px',
  3: '8px',
  default: '6px'
}

// Shadow

const shadow = {
  default: `0 1px 0 rgba(${hexToRGB(colorSystem.black)}, 0.04)`,
  medium: `0 3px 6px rgba(${hexToRGB(colorSystem.grays['400'])}, 0.15)`,
  large: `0 8px 24px rgba(${hexToRGB(colorSystem.grays['400'])}, 0.2)`,
  'extra-large': `0 12px 48px rgba(${hexToRGB(colorSystem.grays['400'])}, 0.3)`,
}

const inset = {
  default: `inset 0 1px 0 rgba(${hexToRGB(colorSystem.white)}, 0.25)`,
  medium: `inset 0 1px 0 rgba(${hexToRGB(colorSystem.grays['200'])}, 0.2)`
}

// Tooltip

// Mainly used with useTheme()
const tooltip = {
  'max-width': '250px',
  'background-color': colorSystem.black,
  'text-color': colorSystem.white,
  delay: '0.4s',
  duration: '0.1s'
}

// Export

const misc = {
  border,
  borderWithColor,
  borderWidth,
  borderStyle,
  radius,
  shadow,
  inset,
  tooltip
}

export default misc
