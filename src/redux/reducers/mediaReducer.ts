import mediaActionTypes from '../actions/mediaActionTypes'

export default function mediaReducer(state = [], action) {
  switch (action.type) {
    case mediaActionTypes.LOAD_POPULAR_MOVIES:
      return action.data
  }
}