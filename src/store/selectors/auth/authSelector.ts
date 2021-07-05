import { createSelector } from 'reselect'
import { IRootState } from 'store/rootReducers.d'
export const userSelector = createSelector(
  (state: IRootState) => state.auth,
  (auth) => auth.user
)
