import { Dispatch } from 'react'
import { IAuthTypes } from './authAction.d'

export const login = () => (dispatch: Dispatch<any>) => {
  dispatch({ type: IAuthTypes.LOGIN_REQUEST })
}
