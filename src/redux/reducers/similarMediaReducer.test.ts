import mediaActionTypes from '../actions/mediaActionTypes'
import similarMediaReducer from './similiarMediaReducer'

describe('Given a similarMediaReducer function', () => {
  describe('When is invoked with an action with type LOAD_MEDIA_SIMILAR', () => {
    test('Then should return action.data', () => {
      const mockAction = {
        type: mediaActionTypes.LOAD_MEDIA_SIMILAR,
        data: ['mockData']
      }

      const result = similarMediaReducer([], mockAction)

      expect(result).toEqual(['mockData'])
    })
  })
})
