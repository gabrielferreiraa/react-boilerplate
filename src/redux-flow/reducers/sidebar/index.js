'use strict'

import { handleActions } from 'redux-actions'
import * as action from './actions'

const initialState = { open: true }

const handlers = {
  [action.TOGGLE]: (state, action) => ({ ...state, open: !state.open })
}

export default handleActions(handlers, initialState)
