import { IAppState } from './reducers/app/appReducer.d'
import { IAuthState } from './reducers/auth/authReducer.d'
export interface IRootState {
  auth: IAuthState
  app: IAppState
}
