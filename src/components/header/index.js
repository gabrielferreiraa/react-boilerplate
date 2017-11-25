'use strict'

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Icon, Tooltip } from 'antd'
import { widths, colors, project } from 'utils/globals'
import Tabs from './tabs'
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

const collapsed = `calc(${widths.sidebar}px + 10px)`
const ToggleMenu = styled.a`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.67);
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

const Actions = styled.ul`
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
`

const Action = styled.li`
    min-width: 60px;
    height: 100%;
    font-size: 1.4em;
    background-color: ${props => props.logout ? colors.danger : 'transparent'};

    :hover {
      transition: font-weight 150ms ease;
      font-weight: bold;
    }
`
const LinkAction = styled.a`
    color: rgba(255, 255, 255, 0.67);
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(0, 0, 0, .1);

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
          <Tabs open={open} />
        </ProductIdentifier>
        <ToggleMenu onClick={toggle} open={open}>
          <Icon type={open ? 'menu-fold' : 'menu-unfold'} />
        </ToggleMenu>
        <Actions>
          <Action>
            <LinkAction href=''>
              <Icon type='logout' />
            </LinkAction>
          </Action>
          <Action>
            <LinkAction href=''>
              <Icon type='logout' />
            </LinkAction>
          </Action>
          <Action>
            <Tooltip placement='bottom' title='Ajustes Gerais'>
              <LinkAction onClick={() => {}}>
                <Icon type='bars' />
              </LinkAction>
            </Tooltip>
          </Action>
          <Action logout>
            <Tooltip placement='bottom' title='Sair'>
              <LinkAction href=''>
                <Icon type='logout' />
              </LinkAction>
            </Tooltip>
          </Action>
        </Actions>
      </StyledHeader>
    )
  }
}

const mapStateToProps = state => ({ open: state.sidebar.open })
const mapDispatchToProps = dispatch => bindActionCreators({ toggle }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)
