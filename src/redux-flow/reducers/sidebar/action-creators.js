import * as action from './actions'

export const toggle = () => ({ type: action.TOGGLE })
export const changeMode = mode => ({ type: action.CHANGE_MODE, payload: mode })
export const changeTheme = theme => ({ type: action.CHANGE_THEME, payload: theme })
