import axios from 'axios'
import mediaActionTypes from './mediaActionTypes'
import apiConstants from '../../constants/apiConstants'
import { Dispatch } from 'redux'

export function loadMediaPopular (mediaType: string) {
  return async (dispatch: Dispatch) => {
    const { data: { results } } = await axios.get(`${apiConstants.URL_BASE_API}${mediaType}${apiConstants.URL_POPULAR}${apiConstants.QUERY_API_KEY}${process.env.REACT_APP_APIKEY}`)
    dispatch({
      type: mediaActionTypes.LOAD_MEDIA_POPULAR,
      data: results
    })
  }
}

export function loadMediaDetail (type :string, id: string) {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get(`${apiConstants.URL_BASE_API}/${type}/${id}${apiConstants.QUERY_API_KEY}${process.env.REACT_APP_APIKEY}`)
    dispatch({
      type: mediaActionTypes.LOAD_MEDIA_DETAIL,
      data
    })
  }
}

export function loadMediaSimilar (type :string, id: string) {
  return async (dispatch: Dispatch) => {
    const { data: { results } } = await axios.get(`${apiConstants.URL_BASE_API}/${type}/${id}${apiConstants.URL_SIMILAR}${apiConstants.QUERY_API_KEY}${process.env.REACT_APP_APIKEY}`)
    dispatch({
      type: mediaActionTypes.LOAD_MEDIA_SIMILAR,
      data: results
    })
  }
}
