import { combineReducers } from 'redux'

import sidebarReducer from './sidebar'
import toolbarReducer from './toolbar'

const rootReducers = combineReducers({
  sidebar: sidebarReducer,
  toolbar: toolbarReducer
})

export default rootReducers
