import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadPopularMedia } from '../../redux/actions/mediaActionCreators'
import { RootState } from '../../redux/reducers'
import constants from '../../constants'
import apiConstants from '../../constants/apiConstants'
import { Link } from 'react-router-dom'
import Theaters from '@material-ui/icons/TheatersOutlined'
import Tv from '@material-ui/icons/TvOutlined'
import CircularProgressWithLabel from '../../component/CircularProgressWithLabel'
import './index.scss'
import MediaElement from '../../constants/mediaInterface'

const mapStateToProps = (state: RootState) => ({
  media: state.media
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions:
    bindActionCreators({
      loadPopularMedia
    }, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UnconnectedDashboard: React.FC<Props> = ({ media, actions }: Props) => {
  const [typeMedia, setTypeMedia] = useState<string>(constants.movie)

  useEffect(() => {
    actions.loadPopularMedia(constants.movie)
  }, [])

  const mediaSelect = (newMedia : string) => {
    if (newMedia !== typeMedia) {
      setTypeMedia(newMedia)
      actions.loadPopularMedia(newMedia)
    }
  }

  return (
    <main>
      <div className="title">
        <h1>{typeMedia.toUpperCase()}</h1>
        <button type="button" onClick={() => mediaSelect(constants.movie)}><Theaters /></button>
        <button type="button" onClick={() => mediaSelect(constants.tv)}><Tv /></button>
      </div>
      <ul>
      {media.length && media.map((element: MediaElement) => (
      <li key={element.id}>
        <Link to={`/detail/${typeMedia}/${element.id}`}>
          <img src={`${apiConstants.URL_BASE_IMAGES}${element.poster_path}`} alt={typeMedia === constants.movie ? element.title : element.name} />
          <div className="detail__title">
            <h3>{typeMedia === constants.movie ? element.title : element.name}</h3>
            <CircularProgressWithLabel value={element.vote_average * 10} />
          </div>
        </Link>
        </li>))}
      </ul>
    </main>
  )
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(UnconnectedDashboard)
