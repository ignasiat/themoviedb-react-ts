import { combineReducers } from 'redux'
import media from './mediaReducer'

const rootReducer = combineReducers({
  media
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
