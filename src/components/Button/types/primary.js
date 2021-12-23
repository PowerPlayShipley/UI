import { css } from "styled-components";
import { darken } from "polished";
import { hexToRGB } from "../../../themes/utils";

const primary = css`
  &.primary {
    color: ${({ theme }) => theme.main.colors.system.white};
    background-color: ${({ theme }) => theme.main.colors.defaults.greenBright};
    border-color: ${({ theme }) => theme.main.colors.border.subtle};
    box-shadow: 0 1px 0 rgba(${({ theme }) => hexToRGB(theme.main.colors.system.black)}, 0.1), 
      inset 0 1px 0 rgba(${({ theme }) => hexToRGB(theme.main.colors.system.white)}, 0.3);
  
    &:hover, &.hover, [open] > & {
      background-color: ${({ theme }) => theme.main.colors.defaults.green};
      border-color: ${({ theme }) => theme.main.colors.border.subtle};
    }
  
    &:active, &.selected, &[aria-selected=true] {
      background-color: ${({ theme }) => darken(0.02, theme.main.colors.defaults.green)};
      box-shadow: inset 0 1px 0 rgba(${({ theme }) => hexToRGB(theme.main.colors.system.greens['900'])}, 0.2);
    }
  
    &:disabled, &.disabled, &[aria-disabled=true] {
      color: rgba(${({ theme }) => hexToRGB(theme.main.colors.system.white)}, 0.8);
      background-color: #94d3a2;
      border-color: ${({ theme }) => theme.main.colors.border.subtle};

      .btn-icon {
        color: ${({ theme }) => theme.main.colors.text.disabled };
      }
    }
  
    &:focus, &.focus {
      background-color: ${({ theme }) => theme.main.colors.system.greens['400']};
      border-color: ${({ theme }) => theme.main.colors.border.subtle};
      box-shadow: 0 0 0 3px rgba(${({ theme }) => hexToRGB(theme.main.colors.system.greens['400'])}, 0.4);
    }

    .btn-icon {
      color: ${({ theme }) => theme.main.colors.system.white};
    }
  }
`

export default primary
