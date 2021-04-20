import mediaActionTypes from '../actions/mediaActionTypes'

interface Action {
  type: string,
  data: any
}

export default function mediaReducer (state = [], action: Action) {
  switch (action.type) {
    case mediaActionTypes.LOAD_POPULAR_MOVIES:
      return action.data
    default:
      return state
  }
}
