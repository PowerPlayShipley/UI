import styled from "styled-components";

export const Icon = styled.div`
  display: flex;
  align-items: center;
  
  height: 24px;
  width: 24px;
  
  justify-content: center;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  
  border-radius: 3px;
  padding: 4px;
  
  color: #222f3e;
  
  cursor: pointer;
  user-select: none;
  
  &:hover {
    background-color: #dee0e2;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  max-height: 200px;
  
  overflow-x: hidden;
  overflow-y: auto;
  
  padding: 0;
`
