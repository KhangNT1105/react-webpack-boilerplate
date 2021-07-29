import { IAppType } from 'store/actions/app/appAction.d'
import { IAppCreator, IAppState } from './appReducer.d'
const initialState: IAppState = {
  language: 'EN',
  isLoading: false,
}

export default (state = initialState, { type, payload }: IAppCreator) => {
  switch (type) {
    case IAppType.CHANGE_LANGUAGE_REQUEST:
      console.log('payload', payload)
      return { ...state, language: payload.language }
    default:
      return state
  }
}
