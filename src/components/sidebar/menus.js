import item from './item'
import tree from './tree'

const menus = menus => (
    menus.map(menu => (
        menu.parent === false
        ? item(menu)
        : tree(menu)
    ))
)

export default menus
