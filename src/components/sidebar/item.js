import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const item = menu => (
  <Menu.Item key={menu.id}>
    <Link to={menu.route}>
      {menu.icon && <Icon type={menu.icon} />}
      <span>{menu.text}</span>
    </Link>
  </Menu.Item>
)

export default item
