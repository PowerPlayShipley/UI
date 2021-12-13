import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  
  // Very crude but will work
  div[disabled],  div.disabled, div[aria-disabled=true]  {
    pointer-events: none;
    
    color: ${({ theme }) => theme.main.colors.text.disabled };
    opacity: 65%;
  }
`

Wrapper.displayName = 'Grid'

export default Wrapper
