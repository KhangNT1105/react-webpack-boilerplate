import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import configureStore from 'store'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

// Create browser history to use in the Redux store
const errorLink = onError(({ graphqlErrors, networkError }: any) => {
  if (graphqlErrors) {
    console.log('error', graphqlErrors)
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT }),
])
const baseUrl =
  document.getElementsByTagName('base')[0].getAttribute('href') || '/'
const history = createBrowserHistory({ basename: baseUrl })
const clientParam = {
  cache: new InMemoryCache(),
  link,
}
console.log('query', process.env.REACT_APP_GRAPHQL_ENDPOINT)
const client = new ApolloClient(clientParam)
const { store, persistor } = configureStore(history)
const Root = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <ConnectedRouter history={history}>
          <QueryParamProvider ReactRouterRoute={Route}>
            <ApolloProvider client={client}>
              <App />
            </ApolloProvider>
          </QueryParamProvider>
        </ConnectedRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
)
const rootElement = document.getElementById('app')
ReactDOM.render(Root, rootElement)
