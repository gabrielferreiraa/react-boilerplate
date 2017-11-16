import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggle } from 'reducers/sidebar/action-creators'

import styled from 'styled-components'
import { Menu, Button } from 'antd'
import Item from './item'
import Tree from './tree'

class Sidebar extends PureComponent {
  render () {
    const { open } = this.props

    const Sidebar = styled(Menu)`
      height: calc(100vh);
    `

    const SidebarWrapper = styled.div`
      width: 240px
    `

    const Butao = () => (
      <Menu.Item>BUTAO</Menu.Item>
    )

    const data = {
      menus: [
        {
          id: 1,
          text: 'Dashboard',
          icon: 'fa fa-dashboard',
          route: '/dashboard',
          parent: false
        }, {
          id: 2,
          text: 'Participantes',
          icon: 'fa fa-users',
          route: '/participantes',
          parent: false
        }
      ]
    }

    return (
      <SidebarWrapper>
        <Sidebar
          mode='inline'
          theme='dark'
          inlineCollapsed={!open}
        >
          <Butao>
            adasd
          </Butao>
        </Sidebar>
      </SidebarWrapper>
    )
  }
}

const mapStateToProps = state => ({ open: state.sidebar.open })
const mapDispatchToProps = dispatch => bindActionCreators({ toggle }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
