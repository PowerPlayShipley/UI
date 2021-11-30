import colors from './color'
import colorSystem from './color-system'
import { hexToRGB } from './utils'

// Border
const border = `1px ${colors.border.gray} solid`
const borderWithColor = (color) => `1px ${color} solid`

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

  highlight: `inset 0 1px 0 rgba(${hexToRGB(colorSystem.white)}, 0.25)`,
  inset: `inset 0 1px 0 rgba(${hexToRGB(colors.border.gray)}, 0.2)`,
  focus: `0 0 0 3px rgba(${hexToRGB(colors.border.blue)}, 0.3)`
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
  radius,
  shadow,
  tooltip
}

export default misc
