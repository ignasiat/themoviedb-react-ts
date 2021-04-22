import axios from 'axios'
import { loadMediaPopular, loadMediaDetail, loadMediaSimilar } from './mediaActionCreators'
import mediaActionTypes from './mediaActionTypes'
import store from '../store/configureStore'
import constants from '../../constants'

jest.mock('axios')

describe('Given the mediaActions Creators', () => {
  beforeEach(() => {
    store.dispatch = jest.fn()
  })

  describe('Given a loadMediaPopular function ', () => {
    describe('When is invoked', () => {
      test('Then should dispatch an action with type LOAD_MEDIA_POPULAR', async () => {
        axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: { results: [] } }))

        const dispatchFunction = loadMediaPopular(constants.movie)

        await dispatchFunction(store.dispatch)

        expect(store.dispatch).toHaveBeenCalledWith({ type: mediaActionTypes.LOAD_MEDIA_POPULAR, data: [] })
      })
    })
  })

  describe('Given a loadMediaDetail function ', () => {
    describe('When is invoked', () => {
      test('Then should dispatch an action with type LOAD_MEDIA_DETAIL', async () => {
        axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: {} }))

        const dispatchFunction = loadMediaDetail(constants.movie, '11')

        await dispatchFunction(store.dispatch)

        expect(store.dispatch).toHaveBeenCalledWith({ type: mediaActionTypes.LOAD_MEDIA_DETAIL, data: {} })
      })
    })
  })

  describe('Given a loadMediaSimilar function ', () => {
    describe('When is invoked', () => {
      test('Then should dispatch an action with type LOAD_MEDIA_SIMILAR', async () => {
        axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: { results: [] } }))

        const dispatchFunction = loadMediaSimilar(constants.movie, '11')

        await dispatchFunction(store.dispatch)

        expect(store.dispatch).toHaveBeenCalledWith({ type: mediaActionTypes.LOAD_MEDIA_SIMILAR, data: [] })
      })
    })
  })
})
