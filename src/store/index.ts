import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { IS_DEVELOPMENT } from 'constants/commons'

const store = createStore(
  rootReducers,
  IS_DEVELOPMENT
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)

export default store
