import styled from "styled-components";

const Wrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  span {
    // Keep this nice and small
    margin-right: ${({ size }) => size === 'xs' ? 2 : 4 }px;
  }

  span:last-child {
    margin-right: 0;
  }
`

export default Wrapper
