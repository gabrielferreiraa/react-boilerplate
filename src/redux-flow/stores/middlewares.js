import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [
  thunk,
  multi,
  promise,
  logger
]

export default middlewares
