'use strict'

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import { widths, colors, project } from 'utils/globals'

const StyledHeader = styled.nav`
    height: 60px;
    position: relative;
    background-color: ${colors.secondary}
`

const ProductIdentifier = styled.div`
    width: ${widths.sidebar}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    height: calc(100% + 30px);
    background-color: ${colors.tertiary}
`

const Name = styled.span`
    transform: translateY(-15px);
    color: #FFF;
    font-size: 1.3em;
    font-weight: bold;
`

const Tab = styled.ul`
    margin: 0;
    padding: 0;
    position: absolute;
    height: 30px;
    bottom: 0;
    background-color: ${colors.tertiary},
    width: 100%;
    display: flex;
`

const TabItem = styled.li`
    border-right: 1px solid rgba(0, 0, 0, .1);
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, .3);
    background-color: rgba(0, 0, 0, .1);

    :hover {
        background-color: rgba(0, 0, 0, .2);
        color: ${colors.tertiary};
        cursor: pointer;
        font-size: 1.5em;
        transition: font-size 150ms ease-in-out;
    }
`

class Header extends PureComponent {
  render () {
    return (
      <StyledHeader>
        <ProductIdentifier>
          <Name>{project.name}</Name>
          <Tab>
            <TabItem>
              <Icon type='bars' />
            </TabItem>
            <TabItem>
              <Icon type='pie-chart' />
            </TabItem>
            <TabItem>
              <Icon type='cloud' />
            </TabItem>
            <TabItem>
              <Icon type='bell' />
            </TabItem>
          </Tab>
        </ProductIdentifier>
      </StyledHeader>
    )
  }
}

export default Header
