import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import typography from '../../themes/typography'

// Helper methods to clean up the header css
const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const mobileHeaders = Object.keys(typography.headers).filter((el) => el.includes('-mobile'))
const cssNames = (header) => elements.includes(header) ? `${header}, .${header}` : `.${header}`
const hasMobileVersion = (header) => mobileHeaders.includes(`${header}-mobile`)

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: ${props => props.theme.main.typography['body-font']};
    font-size: ${props => props.theme.main.typography['font-size']};
    line-height: ${props => props.theme.main.typography['line-height']};
    font-weight: ${props => props.theme.main.typography.fontWeights.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }
  
  img[data-src], img[data-srcset] {
    min-height: 1px;
    min-width: 1px;
  }
  
  img, svg {
      display: block;
      width: 100%;
      height: auto;
  }
  
  a, button, h1, h2, h3, h4, h5, h6, input, ol, p, textarea, th, ul {
    background: transparent;
    border: 0;
    border-radius: 0;
    font: inherit;
    list-style: none;
    margin: 0;
    outline: 0;
    overflow: visible;
    padding: 0;
    vertical-align: baseline;
}
  
  a, a:hover {
    color: inherit;
    background-color: transparent;
    text-decoration: none;
  }
  
  // Have these here so can be used anywhere without a component
  ${props => Object.keys(props.theme.main.sizes.breakpoints).map((bp) => css`
    .container-${bp} {
      max-width: ${props.theme.main.sizes.containers[bp]};
      margin-right: auto;
      margin-left: auto;
      // Overwrite the bootstrap padding
      padding: 0;
    }
  `)}
  
  // Have these here so can be used anywhere without a component
  ${props => Object.keys(props.theme.main.typography.headers).filter((el) => !mobileHeaders.includes(el)).map((bp) => css`
    ${cssNames(bp)} {
      font-size: ${props.theme.main.typography.headers[bp]};
      font-weight: ${props.theme.main.typography.fontWeights.semiBold};
      line-height: 1.2;
      
      // If their is a mobile version of the header force it here
      ${hasMobileVersion(bp)
  ? css`
          @media (max-width: ${props => props.theme.main.sizes.breakpoints.sm}) {
            font-size: ${props.theme.main.typography.headers[`${bp}-mobile`]};
          }
        `
  : null}
    }
  `)}
`

export default GlobalStyle
