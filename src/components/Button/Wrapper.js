import styled, { css } from "styled-components";
import { darken } from 'polished'

import { hexToRGB } from "../../themes/utils";

import * as types from './types'

const Wrapper = styled.button`
  position: relative;
  display: inline-block;
  
  padding: 5px ${({ theme }) => theme.main.sizes.spacing['space-3']};
  
  font-size: ${({ theme }) => theme.main.typography["font-size-small"]};
  font-weight: ${({ theme }) => theme.main.typography.fontWeights.bold};
  line-height: 20px;
  
  white-space: nowrap;
  vertical-align: middle;
  
  cursor: pointer;
  user-select: none;
  border: ${({ theme }) => `${theme.main.misc.borderWidth} ${theme.main.misc.borderStyle}`};
  border-radius: ${({ theme }) => theme.main.misc.radius.default };
  
  appearance: none;
  
  &:hover {
    text-decoration: none;
  }

  &:disabled, &.disabled, &[aria-disabled=true] {
    cursor: default;
  }

  .dropdown-caret {
    margin-left: ${({ theme }) => theme.main.sizes.spacing['space-1']};
    opacity: 0.8;
  }
  
  & .btn-icon {
    margin-right: ${({theme}) => theme.main.sizes.spacing['space-1']};
    color: inherit;
    vertical-align: text-bottom;

    &:only-child {
      margin-right: 0;
    }
  }
  
  // Default button tags
  & {
    color: ${({ theme }) => theme.main.colors.text.default };
    background-color: ${({ theme }) => theme.main.colors.backgrounds.default };
    border: ${({ theme }) => theme.main.misc.border };
    
    box-shadow: ${({ theme }) => theme.main.misc.shadow.default }, ${({ theme }) => theme.main.misc.inset.default };
    
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;

    &:hover, &.hover, [open] > & {
      background-color: ${({ theme }) => theme.main.colors.system.grays['100'] };
      transition-duration: 0.1s;
    }

    &:active {
      background-color: ${({ theme }) => darken('0.03', theme.main.colors.system.grays['100']) };
      transition: none;
    }

    &.selected, &[aria-selected=true] {
      background-color: ${({ theme }) => darken('0.02', theme.main.colors.system.grays['100']) };
      box-shadow: ${({ theme }) => theme.main.misc.inset.medium};
    }

    &:disabled, &.disabled, &[aria-disabled=true] {
      color: ${({ theme }) => theme.main.colors.text.disabled };
      background-color: ${({ theme }) => theme.main.colors.backgrounds.default };
      cursor: default;

      .btn-icon {
        color: ${({ theme }) => theme.main.colors.text.disabled };
      }
    }

    // Keep :focus after :disabled. Allows to see the focus ring even on disabled buttons
    &:focus, &.focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(${({ theme }) => hexToRGB(theme.main.colors.system.blues['500'])}, 0.15);
    }
  }
  
  ${({ state }) => types[state]}
`

export default Wrapper
