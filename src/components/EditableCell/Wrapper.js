import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  
  flex: 1;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: flex-end;
  
  padding: 0 0;
  
  .editable {
    overflow: auto;
  }
  
  .toolbar {
    flex: none;
    box-shadow: ${({ theme }) => theme.main.misc.shadow.default};
  }
`

export default Wrapper
