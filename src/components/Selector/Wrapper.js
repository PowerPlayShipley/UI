import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  overflow: hidden;
  
  background-color: ${({ theme }) => theme.main.colors.system.white};
  border: ${({ theme }) => theme.main.misc.border};
  border-radius: ${({ theme }) => theme.main.misc.radius.default};
  
  box-shadow: ${({ theme }) => theme.main.misc.shadow.default};
`

export default Wrapper
