import { combineReducers } from 'redux'
import auth from './reducers/auth/authReducer'

const reducers = combineReducers({
  auth,
})
export default reducers
