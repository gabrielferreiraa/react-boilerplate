import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Menu } from 'antd'
import menus from './menus'
import { widths } from 'utils/globals'

class Sidebar extends PureComponent {
  render () {
    const { open, theme, mode } = this.props

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
      <div style={{ width: widths.sidebar, position: 'absolute' }}>
        <Menu
          mode={mode}
          theme={theme}
          inlineCollapsed={!open}
          style={{
            marginTop: open ? '30px' : '0',
            height: '100vh'
          }}
        >
          {menus(data.menus)}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = ({ sidebar }) => ({
  open: sidebar.open,
  theme: sidebar.theme,
  mode: sidebar.mode
})
export default connect(mapStateToProps, null)(Sidebar)
