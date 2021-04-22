import mediaActionTypes from '../actions/mediaActionTypes'
import { Action } from '.'

export default function similarMediaReducer (state = [], action: Action) {
  switch (action.type) {
    case mediaActionTypes.LOAD_MEDIA_SIMILAR:
      return action.data
    default:
      return state
  }
}
