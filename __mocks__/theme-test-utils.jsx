// TODO: Fix this??

import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { render as rtlRender } from '@testing-library/react'

import { ThemeProvider } from "styled-components";

import theme from '../src/themes'
import GlobalStyle from "../src/components/GlobalStyle";

function renderWithTheme(ui, { ...options } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <div id='modal-root' />
    </ThemeProvider>
  )

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

// THE BELLOW COME FROM `https://github.com/styled-components/styled-components/blob/0aa3170c255a49cd41c3fbeb2b8051b5d132f229/src/test/utils.js`

const stripComments = (str) => str.replace(/\/\*.*?\*\/\n?/g, '');

const stripWhitespace = (str) => str
  .trim()
  .replace(/([;\{\}])/g, '$1  ')
  .replace(/\s+/g, ' ');

const getCSS = (scope) =>
  Array.from(scope.querySelectorAll('style'))
    .map(tag => tag.innerHTML)
    .join('\n')
    .replace(/ {/g, '{')
    .replace(/:\s+/g, ':')
    .replace(/:\s+;/g, ':;');

function expectCSSMatches ( _expectation, opts = { ignoreWhitespace: true }) {
  // NOTE: This should normalise both CSS strings to make irrelevant mismatches less likely
  const expectation = _expectation
    .replace(/ {/g, '{')
    .replace(/:\s+/g, ':')
    .replace(/:\s+;/g, ':;');

  const css = getCSS(document);

  if (opts.ignoreWhitespace) {
    const stripped = stripWhitespace(stripComments(css));
    expect(stripped).toEqual(stripWhitespace(expectation));
    return stripped;
  } else {
    expect(css).toEqual(expectation);
    return css;
  }
};

export * from '@testing-library/react';

export { renderWithTheme, expectCSSMatches };
