import { handleActions } from 'redux-actions'
import * as action from './actions'

const initialState = {
  open: false
}

const handlers = {
  [action.TOGGLE]: (state, action) => ({ ...state, open: !state.open })
}

export default handleActions(handlers, initialState)
