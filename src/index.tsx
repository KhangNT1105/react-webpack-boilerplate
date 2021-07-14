import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import configureStore from 'store'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

// Create browser history to use in the Redux store
const baseUrl =
  document.getElementsByTagName('base')[0].getAttribute('href') || '/'
const history = createBrowserHistory({ basename: baseUrl })

const store = configureStore(history, {})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <App />
        </QueryParamProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#app')
)
