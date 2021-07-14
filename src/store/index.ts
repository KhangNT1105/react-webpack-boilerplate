// configureStore.js
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducers'
import thunk from 'redux-thunk'

export default function configureStore(history: any, preloadedState: any) {
  const middleware = [thunk, routerMiddleware(history)]

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(applyMiddleware(...middleware))
  )

  return store
}

// const store = createStore(
//   rootReducers,
//   IS_DEVELOPMENT
//     ? composeWithDevTools(applyMiddleware(thunk))
//     : applyMiddleware(thunk)
// )

// export default store
