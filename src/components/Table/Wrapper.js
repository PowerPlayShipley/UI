import styled from "styled-components";

const Wrapper = styled.table`
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.main.colors.border.default};
  
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  
  th, td {
    margin: 0;
    padding: 0.5rem;
    
    border-bottom: 1px solid ${({ theme }) => theme.main.colors.border.default};
    border-right: 1px solid ${({ theme }) => theme.main.colors.border.default};
    
    :last-child {
      border-right: 0;
    }
  }
`

export default Wrapper
