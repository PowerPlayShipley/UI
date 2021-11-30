import { hexToRGB } from './utils'

const black = '#333740'
const white = '#ffffff'

//
//
// -------- Grays --------
const grays = {
  '000': '#fafbfc',
  100: '#f6f8fa',
  200: '#e1e4e8',
  300: '#d1d5da',
  400: '#9B9B9B', // Secondary
  500: '#6a737d',
  600: '#586069',
  700: '#4A4A4A', // Primary
  800: '#2f363d',
  900: '#24292e'
}

// -------- Blue --------
const blues = {
  '000': '#e6f5fa',
  100: '#ccebf5',
  200: '#99d6eb',
  300: '#66c2e0',
  400: '#1aa3d1',
  500: '#0099CC', // Pumadur Blue
  600: '#007aa3',
  700: '#006b8f',
  800: '#004d66',
  900: '#002e3d'
}

// -------- Green --------

const greens = {
  '000': '#e0f5d6',
  100: '#c2ebad',
  200: '#a3e085',
  300: '#85d65c',
  400: '#75d147',
  500: '#66CC33', // Pumathane
  600: '#5cb82e',
  700: '#52a329',
  800: '#3d7a1f',
  900: '#295214'
}

// -------- Red --------

const reds = {
  '000': '#ffd6d6',
  100: '#ffadad',
  200: '#ff9999',
  300: '#ff7070',
  400: '#ff4747',
  500: '#ff3333', // Resdev Red
  600: '#e62e2e',
  700: '#cc2929',
  800: '#991f1f',
  900: '#4c0f0f'
}

// -------- Fades --------

const increment = [0.15, 0.3, 0.5, 0.7, 0.85]
const fades = { }

increment.forEach((inc) => {
  fades[`white-${inc * 100}`] = `rgba(${hexToRGB(white)}, ${inc})`
  fades[`black-${inc * 100}`] = `rgba(${hexToRGB(black)}, ${inc})`
})

// -------- Color defaults --------

const red = reds['500']
const blue = blues['500']
const green = greens['500']

const greyDark = grays['900']
const greyLight = grays['400']
const grey = grays['700']

// Exports

const colorSystem = {
  // Tints
  grays,
  blues,
  greens,
  reds,
  fades,
  // Singular hues
  black,
  white,
  red,
  blue,
  green,
  'gray-dark': greyDark,
  'gray-light': greyLight,
  gray: grey
}

export default colorSystem
