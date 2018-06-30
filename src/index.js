import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import Routes from 'routes'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
