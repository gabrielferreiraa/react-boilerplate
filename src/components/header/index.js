'use strict'

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import { widths, colors, project } from 'utils/globals'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggle } from 'reducers/sidebar/action-creators'

const StyledHeader = styled.nav`
    height: 60px;
    position: relative;
    background-color: ${colors.secondary}
`

const ProductIdentifier = styled.div`
    width: ${props => props.open ? widths.sidebar + 'px' : '64px'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    height: ${props => props.open ? 'calc(100% + 30px)' : '100%'};
    background-color: ${colors.tertiary};
    transition: width 150ms ease;
    will-change: width;
`

const Name = styled.span`
    transform: ${props => props.open ? 'translateY(-15px)' : 'none'};
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

const collapsed = `calc(${widths.sidebar}px + 10px)`
const ToggleMenu = styled.a`
    text-decoration: none;
    color: #FFF;
    position: absolute;
    left: ${props => props.open ? collapsed : '75px'};
    top: 50%;
    margin-top: -10px;
    font-size: 1.4em;
    transition: left 300ms ease;
    will-change: left;

    :hover {
      color: #FFF;
    }
`

const collapsedName = name => {
  let projectName = ''

  project.name.split(' ').map(value => (
    projectName += value.substring(0, 1)
  ))

  return projectName
}

class Header extends PureComponent {
  render () {
    const { toggle, open } = this.props

    return (
      <StyledHeader>
        <ProductIdentifier open={open}>
          <Name open={open}>
            {!open ? collapsedName(project.name) : project.name}
          </Name>
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
        </ProductIdentifier>
        <ToggleMenu onClick={toggle} open={open}>
          <Icon type={open ? 'menu-fold' : 'menu-unfold'} />
        </ToggleMenu>
      </StyledHeader>
    )
  }
}

const mapStateToProps = state => ({ open: state.sidebar.open })
const mapDispatchToProps = dispatch => bindActionCreators({ toggle }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)
