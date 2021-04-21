import { combineReducers } from 'redux'
import media from './mediaReducer'
import selectedMedia from './selectedMediaReducer'
import similarMedia from './similiarMediaReducer'

const rootReducer = combineReducers({
  media,
  selectedMedia,
  similarMedia
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

export interface Action {
  type: string,
  data: any
}
