// configureStore.js
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducers'
import thunk from 'redux-thunk'
import localForage from 'localforage'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
export default function configureStore(history: any) {
  const middleware = [thunk, routerMiddleware(history)]

  let config = {
    key: 'root',
    storage: localForage,
    whitelist: ['app'],
    debug: process.env.NODE_ENV !== 'production',
  }
  const persistedReducer = persistReducer(config, createRootReducer(history)) // root reducer with router state
  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware))
  )

  let persistor = persistStore(store)

  return { store, persistor }
}

// const store = createStore(
//   rootReducers,
//   IS_DEVELOPMENT
//     ? composeWithDevTools(applyMiddleware(thunk))
//     : applyMiddleware(thunk)
// )

// export default store
