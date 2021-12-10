import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactTooltip from "react-tooltip";

import theme from '../src/themes'

import GlobalStyle from "../src/components/GlobalStyle";
import Fonts from "../src/components/Fonts";

window.modalRoot = 'modal-root'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Fonts />
      <Story />
      <ReactTooltip />
      <div id={window.modalRoot} />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
