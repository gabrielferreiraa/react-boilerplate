import React from 'react'
import { Menu, Icon } from 'antd'
import menus from './menus'

const { SubMenu } = Menu

const tree = menu => {
  const TreeIcon = () => (
    <span>
      <Icon type={menu.icon} />
      <span>{menu.text}</span>
    </span>
  )

  return (
    <SubMenu key={menu.id} title={<TreeIcon />}>
      {menus(menu.children)}
    </SubMenu>
  )
}

export default tree
