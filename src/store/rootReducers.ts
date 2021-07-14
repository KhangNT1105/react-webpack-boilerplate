import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import auth from './reducers/auth/authReducer'
const createRootReducer: Function = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  })
export default createRootReducer
