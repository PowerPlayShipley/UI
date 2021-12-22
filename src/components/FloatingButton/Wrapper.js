import styled from "styled-components";
import { tint, parseToRgb, rgbToColorString } from "polished";

const Wrapper = styled.button`
  box-sizing: border-box;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  border-radius: 50%;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 
    0 6px 10px 0 rgb(0 0 0 / 14%), 
    0 1px 18px 0 rgb(0 0 0 / 12%);
  
  padding: 0;
  width: ${({ theme }) => theme.main.sizes.scale['size-7']};
  height: ${({ theme }) => theme.main.sizes.scale['size-7']};
  
  cursor: pointer;
  user-select: none;
  
  overflow: hidden;

  color: ${({ color, theme }) => color ? color : theme.main.colors.system.white};
  background-color: ${({ background, theme }) => background ? background : theme.main.colors.defaults.greenBright};

  & {
    background-position: center;
    transition: background 0.4s;
  }
  
  &:hover &:active {
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 
      0 8px 10px 1px rgb(0 0 0 / 14%), 
      0 3px 14px 2px rgb(0 0 0 / 12%);
  }

  &:disabled, &.disabled, &[aria-disabled=true] {
    color: ${({ theme }) => rgbToColorString({...parseToRgb(theme.main.colors.system.white), alpha: 0.9})} !important;
    background-color: ${({ background, theme }) => tint(0.3, background ? background : theme.main.colors.defaults.greenBright)} !important;
    
    cursor: default !important;
  }
  
  // TODO: Set these to work with light and dark colors
  &:hover {
    --hover-background: ${({ background, theme }) => tint(0.2, background ? background : theme.main.colors.defaults.greenBright)};
  }
  
  &:hover {
    cursor: pointer;
    background: var(--hover-background) radial-gradient(circle, transparent 1%, var(--hover-background) 1%) center/15000%;
  }

  &.ripple:active {
    --active-background: ${({ background, theme }) => tint(0.4, background ? background : theme.main.colors.defaults.greenBright)};
  }
  
  &.ripple:active {
    background-color: var(--active-background);
    background-size: 100%;
    transition: background 0s;
  }
`

export default Wrapper
