import { handleActions } from 'redux-actions'
import * as action from './actions'

const initialState = {
  open: true,
  mode: 'inline',
  theme: 'dark'
}

const handlers = {
  [action.TOGGLE]: (state, action) => ({ ...state, open: !state.open }),
  [action.CHANGE_MODE]: (state, action) => ({ ...state, mode: action.payload }),
  [action.CHANGE_THEME]: (state, action) => ({ ...state, theme: action.payload })
}

export default handleActions(handlers, initialState)
