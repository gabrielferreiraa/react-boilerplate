import React from 'react'
import { Menu, Icon } from 'antd'

const item = menu => (
  <Menu.Item key={menu.id}>
    {menu.icon && <Icon type={menu.icon} />}
    <span>{menu.text}</span>
  </Menu.Item>
)

export default item
