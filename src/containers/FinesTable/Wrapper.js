import styled, { } from "styled-components";

const Wrapper = styled.div`
  display: block;
  max-width: 100%;
  
  overflow: scroll visible;
  
  & table {
    width: 100%;
    height: auto;
    border: none;

    border-collapse: separate;
    border-spacing: 0 8px;
    
    th, td {
      width: 1%;
    }

    th {
      border: none;
      border-right: 1px solid ${({ theme }) => theme.main.colors.border.subtle} !important;
    }

    th:last-child, td:last-child {
      border-right: none !important;
    }
    
    td {
      border: none;
    }
    
    thead {
      font-weight: ${({ theme }) => theme.main.typography.fontWeights.semiBold};
    }
    
    thead {
      th:first-child {
        text-align: left;
      }
    }
    
    tbody tr {
      //--scale: 1.01;
      
      background-color: ${({ theme }) => theme.main.colors.system.white};
      box-shadow: ${({ theme }) => theme.main.misc.shadow.medium }, ${({ theme }) => theme.main.misc.inset.default };
      
      //&:hover {
      //  transform: scale(var(--scale));
      //  
      //  & > * {
      //    transform: scale(calc(1 / var(--scale)));
      //  }
      //}
    }
    
    tbody {
      --border-radius-cell: ${({ theme }) => theme.main.misc.radius["2"]};
      
      tr td:first-child { 
        border-top-left-radius: var(--border-radius-cell);
        border-bottom-left-radius: var(--border-radius-cell);
      }
      tr td:last-child {
        border-top-right-radius: var(--border-radius-cell);
        border-bottom-right-radius: var(--border-radius-cell);
      }
    }
    
    // For only large devices
    tbody td {
      .toolbar {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.1s linear;
      }
      
      &:hover {
        .toolbar {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`

export default Wrapper
