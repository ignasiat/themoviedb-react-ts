import mediaActionTypes from '../actions/mediaActionTypes'
import { Action } from '.'

export default function mediaReducer (state = [], action: Action) {
  switch (action.type) {
    case mediaActionTypes.LOAD_MEDIA_POPULAR:
      return action.data
    default:
      return state
  }
}
