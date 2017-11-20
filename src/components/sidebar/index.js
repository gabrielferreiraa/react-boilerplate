import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggle } from 'reducers/sidebar/action-creators'

import styled from 'styled-components'
import { Menu } from 'antd'
import menus from './menus'
import { widths } from 'utils/globals'

class Sidebar extends PureComponent {
  render () {
    const { open } = this.props

    const Sidebar = styled(Menu)`
      height: calc(100vh);
      margin-top: 30px;
    `

    const SidebarWrapper = styled.div`
      width: ${widths.sidebar}px
    `

    const data = {
      menus: [
        {
          id: 1,
          text: 'Dashboard',
          icon: 'share-alt',
          route: '/dashboard',
          parent: false
        }, {
          id: 2,
          text: 'Participantes',
          icon: 'user',
          route: '/participantes',
          parent: false
        }, {
          id: 3,
          text: 'Relatórios',
          icon: 'file-excel',
          route: '',
          parent: true,
          children: [
            {
              id: 4,
              text: 'Vendas',
              icon: 'setting',
              route: '/vendas',
              parent: false
            }
          ]
        }, {
          id: 5,
          text: 'Configurações',
          icon: 'setting',
          route: '/configuracoes',
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
          {menus(data.menus)}
        </Sidebar>
      </SidebarWrapper>
    )
  }
}

const mapStateToProps = state => ({ open: state.sidebar.open })
const mapDispatchToProps = dispatch => bindActionCreators({ toggle }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
