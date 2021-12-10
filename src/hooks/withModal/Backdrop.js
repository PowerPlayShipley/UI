import styled from "styled-components";

import { hexToRGB } from "../../themes/utils";

const Backdrop = styled.div`
  position: absolute;

  background-color: rgba(${({ theme }) => hexToRGB(theme.main.colors.backgrounds.default) }, 0.6);

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: ${({ zIndex }) => zIndex};
`

export default Backdrop
