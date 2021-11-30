// Heading sizes - mobile
// h4-h6 remain the same size on both mobile & desktop
const mobileHeaders = {
  'h00-mobile': '40px',
  'h0-mobile': '32px',
  'h1-mobile': '26px',
  'h2-mobile': '22px',
  'h3-mobile': '18px'
}

// Heading sizes - desktop
const headers = {
  h000: '64px',
  h00: '48px',
  h0: '40px',
  h1: '32px',
  h2: '24px',
  h3: '20px',
  h4: '16px',
  h5: '14px',
  h6: '12px'
}

const fontWeights = {
  regular: 400,
  light: 300,
  semiBold: 500,
  bold: 600,
  black: 900
}

const lineHeights = {
  'condensed-ultra': 1,
  condensed: 1.25,
  default: 1.5,
  normal: 'normal'
}

// TODO: Add a ground of font sizes??

const bodyFont = '"Lato",  -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
// const fontSize = '14px'
const fontSize = '16px'
// const fontSmall = '12px'
const fontSmall = '14px'
const lineHeight = lineHeights.normal

/**
 * Export
 * */

const typography = {
  headers: {
    ...mobileHeaders,
    ...headers
  },
  fontWeights,
  lineHeights,
  'body-font': bodyFont,
  'line-height': lineHeight,
  'font-size-small': fontSmall,
  'font-size': fontSize
}

export default typography
