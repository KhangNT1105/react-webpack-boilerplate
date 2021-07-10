import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import store from 'store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker.js'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <App />
        </QueryParamProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#app')
)
registerServiceWorker()
