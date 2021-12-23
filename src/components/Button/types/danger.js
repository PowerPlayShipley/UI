import { css } from "styled-components";
import { darken } from "polished";
import { hexToRGB } from "../../../themes/utils";

const danger = css`
  &.danger {
    color: ${({ theme }) => theme.main.colors.text.red};
    
    .btn-icon {
      color: ${({ theme }) => theme.main.colors.text.red};
    }
  
    &:hover, &.hover, [open] > & {
      color: ${({ theme }) => theme.main.colors.system.white};
      background-color: ${({ theme }) => theme.main.colors.system.reds['600']};
      border-color: ${({ theme }) => theme.main.colors.border.subtle};
      box-shadow: 0 1px 0 rgba(${({ theme }) => hexToRGB(theme.main.colors.system.black)}, 0.1),
        inset 0 1px 0 rgba(${({ theme }) => hexToRGB(theme.main.colors.system.white)}, 0.03);

      .btn-icon {
        color: ${({ theme }) => theme.main.colors.system.white};
      }
    }
  
    &:active, &.selected, &[aria-selected=true] {
      color: ${({ theme }) => theme.main.colors.system.white};
      background-color: ${({ theme }) => darken(0.03, theme.main.colors.system.reds['500'])};
      border-color: ${({ theme }) => theme.main.colors.border.subtle};
      box-shadow: inset 0 1px 0 rgba(${({ theme }) => hexToRGB(theme.main.colors.system.reds['900'])}, 0.2);
    }
  
    &:disabled, &.disabled, &[aria-disabled=true] {
      color: rgba(${({ theme }) => hexToRGB(theme.main.colors.system.reds['500'])}, 0.5);
      background-color: ${({ theme }) => theme.main.colors.system.grays['000']};
      border-color: ${({ theme }) => theme.main.colors.border.subtle};
      box-shadow: none;

      .btn-icon {
        color: ${({ theme }) => theme.main.colors.text.disabled };
      }
    }
  
    &:focus, &.focus {
      border-color: ${({ theme }) => theme.main.colors.border.subtle};
      box-shadow: 0 0 0 3px rgba(${({ theme }) => hexToRGB(theme.main.colors.system.reds['600'])}, 0.4);
    }
  }
`

export default danger
