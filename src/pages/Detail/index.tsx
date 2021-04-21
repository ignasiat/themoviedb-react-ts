import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from '../../redux/reducers'
import { loadMediaDetail, loadMediaSimilar } from '../../redux/actions/mediaActionCreators'
import { useParams } from 'react-router-dom'
import constants from '../../constants'
import apiConstants from '../../constants/apiConstants'
import './index.scss'
import CircularProgressWithLabel from '../../component/CircularProgressWithLabel'

const mapStateToProps = (state: RootState) => ({
  selectedMedia: state.selectedMedia,
  similarMedia: state.similarMedia
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions:
    bindActionCreators({
      loadMediaDetail,
      loadMediaSimilar
    }, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const UnconnectedDetail:React.FC<Props> = ({ selectedMedia, similarMedia, actions }: any) => {
  interface ParamTypes {
    mediaType: string;
    id: string;
  }

  const { mediaType, id } = useParams<ParamTypes>()

  useEffect(() => {
    actions.loadMediaDetail(mediaType, id)
    actions.loadMediaSimilar(mediaType, id)
  }, [])

  return (
  <main>
    {selectedMedia
      ? (<>
        <div className="media__container">
          <img src={`${apiConstants.URL_BASE_IMAGES}${selectedMedia.poster_path}`} alt={mediaType === constants.movie ? selectedMedia.title : selectedMedia.name} />
          <div className="media__info">
            <h1>{mediaType === constants.movie ? selectedMedia.title : selectedMedia.name}</h1>
            <p>{selectedMedia.overview}</p>
            <p><span className="media__item--bold">{constants.status}</span> {selectedMedia.status}</p>
            <p><span className="media__item--bold">{constants.vote_count}</span> {selectedMedia.vote_count}</p>
            <p className="media__item--bold">{constants.rating}</p>
            <CircularProgressWithLabel className="media__rating" value={selectedMedia.vote_average * 10} />
          </div>
        </div>
        <h2>{constants.similar_media}</h2>
        <ul>
        {similarMedia.length
          ? similarMedia.map((element: any) => (
            <li key={element.id}>
              <a href={`/detail/${mediaType}/${element.id}`}>
                < img src={`${apiConstants.URL_BASE_IMAGES}${element.poster_path}`} alt={mediaType === constants.movie ? element.title : element.name} />
              </a>
            </li>
          ))
          : (<li>{constants.no_data_similar}</li>) }
        </ul>
     </>)
      : (<p>{constants.no_selected_media}</p>)}
  </main>)
}

export const Detail = connect(mapStateToProps, mapDispatchToProps)(UnconnectedDetail)
