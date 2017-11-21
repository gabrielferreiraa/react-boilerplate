import React from 'react'
import styled from 'styled-components'
import { colors } from 'utils/globals'
import { Icon } from 'antd'

const Tab = styled.ul`
    margin: 0;
    padding: 0;
    position: absolute;
    height: 30px;
    bottom: 0;
    background-color: ${colors.tertiary};
    width: 100%;
    display: flex;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    z-index: 1;
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
        transition: font-size 300ms ease-in-out;
        will-change: font-size;
    }

    :hover a {
        color: ${colors.tertiary};
    }
`

const Link = styled.a`
    text-decoration: none;
    color: rgba(0, 0, 0, .3);
`

const Tabs = ({ open }) => (
  <Tab open={open}>
    <TabItem>
      <Link href='#menu'>
        <Icon type='bars' />
      </Link>
    </TabItem>
    <TabItem>
      <Link href='#dashboard'>
        <Icon type='pie-chart' />
      </Link>
    </TabItem>
    <TabItem>
      <Link href='#cloud'>
        <Icon type='cloud' />
      </Link>
    </TabItem>
    <TabItem>
      <Link href='#notify'>
        <Icon type='bell' />
      </Link>
    </TabItem>
  </Tab>
)

export default Tabs
