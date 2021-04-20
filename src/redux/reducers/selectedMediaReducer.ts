import mediaActionTypes from '../actions/mediaActionTypes'
import { Action } from '.'

export default function selectedMediaReducer (state = null, action: Action) {
  switch (action.type) {
    case mediaActionTypes.LOAD_MEDIA_DETAIL:
      return action.data
    default:
      return state
  }
}
