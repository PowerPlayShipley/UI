import NProgress from 'nprogress'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import theme from '../src/themes'
import GlobalStyle from "../src/components/GlobalStyle";
import Fonts from "../src/components/Fonts";

import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeComplete', NProgress.done)
Router.events.on('routeChangeError', NProgress.done)

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
