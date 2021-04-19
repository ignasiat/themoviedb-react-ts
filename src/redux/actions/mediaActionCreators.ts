import axios from 'axios'
import mediaActionTypes from './mediaActionTypes'
import apiConstants from '../../constants/apiConstants'

export function loadPopularMovies () {
  return async (dispatch) => {
    const { results } = await axios.get(`${apiConstants.URL_POPULAR_MOVIES}${apiConstants.QUERY_API_KEY}${process.env.REACT_APP_APIKEY}`)
    dispatch({
      type: mediaActionTypes,
      data: results
    })
  }
}
