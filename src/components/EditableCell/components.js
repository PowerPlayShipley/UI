import styled from "styled-components";

export const Toolbar = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0;
  padding: 0 4px 0 4px;
`

export const ToolbarButton = styled.button`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;

  color: #222f3e;
  background: 0 0;
  
  border: 0;
  border-radius: 3px;
  box-shadow: none;
  
  height: 30px;
  width: 30px;
  
  padding: 0;
  outline: 0;
  
  overflow: hidden;
  text-transform: none;
  
  &:hover {
    background: #dee0e2;
    border: 0;
    box-shadow: none;
    color: #222f3e;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;

    /*Button disabled - CSS color class*/
    color: #c0c0c0;
    background-color: #ffffff;
  }
`

export const ItemButton = styled.button`
  display: inline-flex;

  margin-left: 0 !important;
  padding-right: 4px;

  align-items: center;
  margin-bottom: 2px;
  
  &:last-child {
    padding-right: 0;
  }
  
  &:disabled {
    color: black;
  }
`
