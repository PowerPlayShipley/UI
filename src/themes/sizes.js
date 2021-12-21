/**
 * Will clean these up when I get sizes I like
 * */

const columns = {
  'col-12': '100%'
}

for (let i = 1; i < 12; i++) {
  columns[`col-${i}`] = `${(i / 12 * 100)}%`
}

/**
 * Spacing / Margins
 *
 * Clean this to be better??
 *
 * These are our margin and padding utility spacers. The default step size we
 * use is 8px. This gives us a key of:
 *    0 => 0px
 *    1 => 4px
 *    2 => 8px
 *    3 => 16px
 *    4 => 24px
 *    5 => 32px
 *    6 => 40px
 * */
const spacer = 8

// eslint-disable-next-line no-var, no-redeclare
var inc_space = (i) => (i === 0
  ? '0'
  : i === 1
    ? `${Math.round(spacer / 2)}px`
    : i === 2
      ? `${spacer}px`
      : `${spacer * (i - 1)}px`)

const spacing = {}

for (let i = 0; i < 7; i++) {
  spacing[`space-${i}`] = inc_space(i)
}

/**
 * Scaling
 * */
const size = 16

// eslint-disable-next-line no-var, no-redeclare
const inc_size = (i) => (i === 7 ? 16 : i >= 5 ? 8 : 4)

const scale = {
  'size-0': 0,
}

let prev = size
for (let i = 1; i <= 8; i++) {
  scale[`size-${i}`] = `${prev}px`
  prev = prev + inc_size(i)
}

/**
 * Width/Containers
 * */

const width = {
  default: '980px',
  xs: '0',
  sm: '544px',
  md: '768px',
  lg: '1012px',
  xl: '1280px'
}

const containers = {
  sm: width.sm,
  md: width.md,
  lg: width.lg,
  xl: width.xl
}

// For any media responsiveness
const breakpoints = {
  ...containers
}

const sizes = {
  breakpoints,
  columns,
  containers,
  spacing,
  scale,
  width
}

export default sizes
