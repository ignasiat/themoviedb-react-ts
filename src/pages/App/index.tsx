import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { loadPopularMovies } from '../../redux/actions/mediaActionCreators'
import { RootState } from '../../redux/reducers'

const mapStateToProps = (state: RootState) => ({
  media: state.media
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions:
    bindActionCreators({
      loadPopularMovies
    }, dispatch)
})

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UnconnectedApp: React.FC<Props> = ({ media, actions }: any) => {
  useEffect(() => {
    actions.loadPopularMovies()
  }, [])

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {media.length && media.map((element: any) => (<p key={element.id}>{element.id}</p>))}
    </div>
  )
}

export const App = connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp)
