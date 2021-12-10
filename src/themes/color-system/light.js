import { hexToRGB } from '../utils'

const black = '#1b1f24'
const white = '#ffffff'

//
//
// -------- Grays --------
const grays = {
  '000': '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f', // Secondary
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53', // Primary
  800: '#32383f',
  900: '#24292f'
}

// -------- Blue --------
const blues = {
  '000': '#ddf4ff',
  100: '#b6e3ff',
  200: '#80ccff',
  300: '#54aeff',
  400: '#218bff',
  500: '#0969da',
  600: '#0550ae',
  700: '#033d8b',
  800: '#0a3069',
  900: '#002155'
}

// -------- Green --------

const greens = {
  '000': '#dafbe1',
  100: '#aceebb',
  200: '#6fdd8b',
  300: '#4ac26b',
  400: '#2da44e',
  500: '#1a7f37', // Pumathane
  600: '#116329',
  700: '#044f1e',
  800: '#003d16',
  900: '#002d11'
}

// ------ Yellow -------

const yellows = {
  '000': '#f8e3a1',
  100: '#f2cc60',
  200: '#e3b341',
  300: '#d29922',
  400: '#bb8009',
  500: '#9e6a03',
  600: '#845306',
  700: '#693e00',
  800: '#4b2900',
  900: '#341a00'
}

// -------- Red --------

const reds = {
  '000': '#FFEBE9',
  100: '#ffcecb',
  200: '#ffaba8',
  300: '#ff8182',
  400: '#fa4549',
  500: '#cf222e', // Resdev Red
  600: '#a40e26',
  700: '#82071e',
  800: '#660018',
  900: '#4c0014'
}

// -------- Fades --------

const increment = [0.15, 0.3, 0.5, 0.7, 0.85]
const fades = { }

increment.forEach((inc) => {
  fades[`white-${inc * 100}`] = `rgba(${hexToRGB(white)}, ${inc})`
  fades[`black-${inc * 100}`] = `rgba(${hexToRGB(black)}, ${inc})`
})

// Exports

const colorSystem = {
  // Tints
  grays,
  blues,
  greens,
  yellows,
  reds,
  // Fades
  fades,
  // default
  black,
  white
}

export default colorSystem
