import { Dispatch } from 'react'
import { IAppType } from './appAction.d'

export const changeLanguage =
  (language: string) => (dispatch: Dispatch<any>) => {
    dispatch({ type: IAppType.CHANGE_LANGUAGE_REQUEST, payload: { language } })
  }
