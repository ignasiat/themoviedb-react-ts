import mediaActionTypes from '../actions/mediaActionTypes'
import { Action } from '.'

export default function similarMediaReducer (state = [], action: Action) {
  switch (action.type) {
    case mediaActionTypes.LOAD_SIMILAR_MEDIA:
      return action.data
    default:
      return state
  }
}
