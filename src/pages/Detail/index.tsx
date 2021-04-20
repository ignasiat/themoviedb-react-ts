import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from '../../redux/reducers'
import { loadMediaDetail, loadMediaSimilar } from '../../redux/actions/mediaActionCreators'
import { useParams, Link } from 'react-router-dom'
import constants from '../../constants'
import apiConstants from '../../constants/apiConstants'
import Home from '@material-ui/icons/HomeOutlined'

const mapStateToProps = (state: RootState) => ({
  selectedMedia: state.selectedMedia,
  media: state.media
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

const UnconnectedDetail:React.FC<Props> = ({ selectedMedia, media, actions }: any) => {
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
    <Link to="/"><Home /></Link>
    {selectedMedia
      ? (<>
        <h2>{mediaType === constants.movie ? selectedMedia.title : selectedMedia.name}</h2>
        <img src={`${apiConstants.URL_BASE_IMAGES}${selectedMedia.poster_path}`} alt={mediaType === constants.movie ? selectedMedia.title : selectedMedia.name} />
        <p>{selectedMedia.overview}</p>
        <ul>
        {media.length && media.map((element: any) => (
          <li key={element.id}>
            <a href={`/detail/${mediaType}/${element.id}`}>
              < img src={`${apiConstants.URL_BASE_IMAGES}${element.poster_path}`} alt={mediaType === constants.movie ? element.title : element.name} />
            </a>
          </li>
        ))}
        </ul>
     </>)
      : (<></>)}
  </main>)
}

export const Detail = connect(mapStateToProps, mapDispatchToProps)(UnconnectedDetail)
