export interface IAppState {
  language: string
  isLoading: boolean
}
export interface IAppCreator {
  type: string
  payload: any
}
