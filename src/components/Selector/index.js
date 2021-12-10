import React from 'react'

import { Panel, Content, Footer, Body, FooterSection, Header } from './components'

import Wrapper from "./Wrapper";

import Title from "../Header"
import ItemGrid from "../ItemGrid";
import Button from "../Button";

import withModal from "../../hooks/withModal";
import PropTypes from "prop-types";
import clsx from "clsx";

export function Selector ({ className, title, items, onItemClicked, onCloseClicked, ...rest }) {
  // Create the class names
  const klass = clsx(
    className && className,
    title && `selector-${title.replace(/\s+/g, '-').toLowerCase()}`
  )

  return (
    <Wrapper className={klass} {...rest}>
      <Header>
        <Title as='h2' title={(title && title) || 'Selector'} />
      </Header>
      <Body>
        <Content>
          <Panel>
            <ItemGrid items={items} onClick={onItemClicked} />
          </Panel>
        </Content>
      </Body>
      <Footer>
        {/* Forces the button to the right */}
        <FooterSection />
        <FooterSection>
          <Button title={'Close'} state={'danger'} onClick={onCloseClicked} />
        </FooterSection>
      </Footer>
    </Wrapper>
  )
}

Selector.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        tooltip: PropTypes.string
      })
    ])
  ).isRequired,
  onItemClicked: PropTypes.func,
  onCloseClicked: PropTypes.func
}

export const ModalSelector = withModal(Selector)
ModalSelector.propTypes = Selector.propTypes
