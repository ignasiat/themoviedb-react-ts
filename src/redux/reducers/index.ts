import { combineReducers } from 'redux'
import media from './mediaReducer'
import selectedMedia from './selectedMediaReducer'

const rootReducer = combineReducers({
  media,
  selectedMedia
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

export interface Action {
  type: string,
  data: any
}
