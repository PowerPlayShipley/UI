import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-shrink: 0;
  flex-wrap: wrap;
  
  padding: 0 0;
  
  & div:${({ toolbarFloat }) => toolbarFloat === 'left' ? 'first-child' : 'nth-child'} {
    flex: none;
  }
`

export default Wrapper
