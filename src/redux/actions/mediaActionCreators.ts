import axios from 'axios'
import mediaActionTypes from './mediaActionTypes'
import apiConstants from '../../constants/apiConstants'
import {Dispatch} from 'redux'

export function loadPopularMovies () {
  return async (dispatch: Dispatch) => {
    const { data: {results} } = await axios.get(`${apiConstants.URL_POPULAR_MOVIES}${apiConstants.QUERY_API_KEY}${process.env.REACT_APP_APIKEY}`)
    dispatch({
      type: mediaActionTypes.LOAD_POPULAR_MOVIES,
      data: results
    })
  }
}
