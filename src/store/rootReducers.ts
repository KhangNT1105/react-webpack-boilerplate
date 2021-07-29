import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import auth from './reducers/auth/authReducer'
import app from './reducers/app/appReducer'
const createRootReducer: Function = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    app,
  })
export default createRootReducer
