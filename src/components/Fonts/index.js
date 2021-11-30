import { createGlobalStyle } from 'styled-components'

/* Lato Regular */
import latoRegular from '../../assets/Lato-Regular.ttf'
import latoRegularWoff from '../../assets/Lato-Regular.woff'
import latoRegularWoff2 from '../../assets/Lato-Regular.woff2'
/* Lato SemiBold */
import latoSemiBold from '../../assets/Lato-Semibold.ttf'
import latoSemiBoldWoff from '../../assets/Lato-Semibold.woff'
import latoSemiBoldWoff2 from '../../assets/Lato-Semibold.woff2'
/* Lato Bold */
import latoBold from '../../assets/Lato-Bold.ttf'
import latoBoldWoff from '../../assets/Lato-Bold.woff'
import latoBoldWoff2 from '../../assets/Lato-Bold.woff2'
/* Lato Black */
import latoBlack from '../../assets/Lato-Black.ttf'
import latoBlackWoff from '../../assets/Lato-Black.woff'
import latoBlackWoff2 from '../../assets/Lato-Black.woff2'

const Fonts = createGlobalStyle`
  /* Lato Regular - 400 */
  @font-face {
    font-family: 'Lato';
    src: url(${latoRegularWoff2}) format('woff2'), url(${latoRegularWoff}) format('woff'), url(${latoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  /* Lato Semi-Bold - 500 */
  @font-face {
    font-family: 'Lato';
    src: url(${latoSemiBoldWoff2}) format('woff2'), url(${latoSemiBoldWoff}) format('woff'), url(${latoSemiBold}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  /* Lato Bold - 600 */
  @font-face {
    font-family: 'Lato';
    src: url(${latoBoldWoff2}) format('woff2'), url(${latoBoldWoff}) format('woff'), url(${latoBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  /* Lato Black - 900 */
  @font-face {
    font-family: 'Lato';
    src:  url(${latoBlackWoff2}) format('woff2'), url(${latoBlackWoff}) format('woff'), url(${latoBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`

export default Fonts
