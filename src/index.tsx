import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Detail } from './pages/Detail'
import Header from './component/Header'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/detail/:mediaType/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
