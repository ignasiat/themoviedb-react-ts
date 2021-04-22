import mediaActionTypes from '../actions/mediaActionTypes'
import mediaReducer from './mediaReducer'

describe('Given a mediaReducer function', () => {
  describe('When is invoked with an action with type LOAD_MEDIA_POPULAR', () => {
    test('Then should return action.data', () => {
      const mockAction = {
        type: mediaActionTypes.LOAD_MEDIA_POPULAR,
        data: ['mockData']
      }

      const result = mediaReducer([], mockAction)

      expect(result).toEqual(['mockData'])
    })
  })
})
