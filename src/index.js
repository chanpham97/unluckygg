import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';

import App from './App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker();
