/**
 * The Item{GridWrapper,Grid,Icon,} may all end up in a separate component here as I may move
 * the editable items to this style inside the table
 * */

import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex: 1;
`
Body.displayName = 'Body'

export const Content = styled.div`
  display: flex;
  flex: 1;
  
  min-width: 0;
  text-align: left;
  text-transform: none;

  color: ${({ theme }) => theme.main.colors.text.default};
`
Content.displayName = 'Content'

export const Panel = styled.div`
  box-sizing: border-box;
  
  display: flex;
  flex: 1;
  flex-direction: column;
  
  max-height: 650px;
  overflow: auto;
  
  // padding: 16px 16px;
  padding: ${({ theme }) => theme.main.sizes.spacing['space-3']} ${({ theme }) => theme.main.sizes.spacing['space-3']};
`
Panel.displayName = 'Panel'

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-bottom: none;
  color: ${({ theme }) => theme.main.colors.text.default};
  
  // padding: 16px 16px 0 16px;
  padding: ${({ theme }) => theme.main.sizes.spacing['space-3']} ${({ theme }) => theme.main.sizes.spacing['space-3']} ${({ theme }) => theme.main.sizes.spacing['space-0']} ${({ theme }) => theme.main.sizes.spacing['space-3']};
`
Header.displayName = 'Header'

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-top: ${({ theme }) => theme.main.misc.border};
  
  // padding: 8px 16px;
  padding: ${({ theme }) => theme.main.sizes.spacing['space-2']} ${({ theme }) => theme.main.sizes.spacing['space-3']};
  
  button {
    margin-left: ${({ theme }) => theme.main.sizes.spacing['space-2']};
  }
`
Footer.displayName = 'Footer'

export const FooterSection = styled.div`
  display: flex;
`
FooterSection.displayName = 'FooterSection'
