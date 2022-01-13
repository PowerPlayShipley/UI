import styled from "styled-components";
import Button from "../../../components/Button/Wrapper";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 8px;
  }
  
  .btn-group {
    display: flex;
    
    ${Button} {
      margin-right: 8px;
    }

    ${Button}:last-child {
      margin-right: 0;
    }
  }
`

export default Wrapper
