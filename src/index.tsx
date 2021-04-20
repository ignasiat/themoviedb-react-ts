import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Detail } from './pages/Detail'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/detail/:media/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
