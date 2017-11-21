import React from 'react'
import { Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

const item = menu => (
  <Menu.Item key={menu.id}>
    <NavLink to={menu.route}>
      {menu.icon && <Icon type={menu.icon} />}
      <span>{menu.text}</span>
    </NavLink>
  </Menu.Item>
)

export default item
