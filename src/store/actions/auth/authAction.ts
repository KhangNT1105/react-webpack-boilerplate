import { Dispatch } from 'react'
import { IAuthType } from './authAction.d'

export const login = () => (dispatch: Dispatch<any>) => {
  dispatch({ type: IAuthType.LOGIN_REQUEST })
}
