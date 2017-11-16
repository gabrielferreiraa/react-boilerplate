import { combineReducers } from 'redux'

import sidebarReducer from './sidebar/'

const rootReducers = combineReducers({
  sidebar: sidebarReducer
})

export default rootReducers
