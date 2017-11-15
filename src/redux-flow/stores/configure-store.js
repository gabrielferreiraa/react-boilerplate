'use strict'

import { applyMiddleware, createStore } from 'redux'
import { DEV_TOOLS } from 'src/utils/constants'
import rootReducers from 'reducers/root-reducers'
import middlewares from './middlewares'

function configureStore () {
  const store = applyMiddleware(...middlewares)(createStore)(rootReducers, DEV_TOOLS)

  return store
}

export { configureStore }
