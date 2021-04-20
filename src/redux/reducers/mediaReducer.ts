import mediaActionTypes from '../actions/mediaActionTypes'
import { Action } from '.'

export default function mediaReducer (state = [], action: Action) {
  switch (action.type) {
    case mediaActionTypes.LOAD_POPULAR_MEDIA:
      return action.data
    case mediaActionTypes.LOAD_SIMILAR_MEDIA:
      return action.data
    default:
      return state
  }
}
