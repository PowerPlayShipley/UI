import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  z-index: 1100;
  
  .__react_component_tooltip {
    z-index: ${({ zIndex }) => zIndex};
  }
`

export default Wrapper
