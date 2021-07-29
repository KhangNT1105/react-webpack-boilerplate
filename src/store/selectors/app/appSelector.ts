import { createSelector } from 'reselect'
import { IRootState } from 'store/rootReducers.d'
export const languageSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.language
)
