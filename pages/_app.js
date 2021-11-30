import { ThemeProvider } from 'styled-components'

import theme from '../src/themes'
import GlobalStyle from "../src/components/GlobalStyle";
import Fonts from "../src/components/Fonts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Fonts />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
