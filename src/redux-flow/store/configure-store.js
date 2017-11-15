'use strict'

import { applyMiddleware, createStore } from 'redux'
import { DEV_TOOLS } from 'src/constants'
import rootReducers from 'reducers/root-reducers'
import middlewares from './middlewares'

const configureStore = () => {
  const store = applyMiddleware(...middlewares)(createStore)(rootReducers, DEV_TOOLS)

  return store
}

export default { configureStore }
