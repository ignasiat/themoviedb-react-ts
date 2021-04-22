import mediaActionTypes from '../actions/mediaActionTypes'
import selectedMediaReducer from './selectedMediaReducer'

describe('Given a selectedMediaReducer function', () => {
  describe('When is invoked with an action with type LOAD_MEDIA_DETAIL', () => {
    test('Then should return action.data', () => {
      const mockAction = {
        type: mediaActionTypes.LOAD_MEDIA_DETAIL,
        data: 'mockData'
      }

      const result = selectedMediaReducer(null, mockAction)

      expect(result).toEqual('mockData')
    })
  })
})
