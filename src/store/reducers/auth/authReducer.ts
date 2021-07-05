import { IAuthTypes } from 'store/actions/auth/authAction.d'
import { IAuthCreator, IAuthState } from './authReducer.d'
const initialState: IAuthState = {
  user: 'khangdzai',
}

export default (state = initialState, { type, payload }: IAuthCreator) => {
  switch (type) {
    case IAuthTypes.LOGIN_SUCCESS:
      return { ...state, ...payload }

    default:
      return state
  }
}
