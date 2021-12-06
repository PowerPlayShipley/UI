// TODO: Fix this??

import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { render as rtlRender } from '@testing-library/react'

import { ThemeProvider } from "styled-components";

import theme from '../src/themes'
import GlobalStyle from "../src/components/GlobalStyle";

function render(ui, { ...options } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react';

export { render, userEvent };
