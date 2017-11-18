import React from 'react'
import { Menu, Icon } from 'antd'

const item = menu => (
  <Menu.Item key={menu.id}>
    {menu.icon && <Icon type={menu.icon} />}
    {menu.text}
  </Menu.Item>
)

export default item
