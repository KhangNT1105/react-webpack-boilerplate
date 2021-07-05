import { RouteProps } from 'react-router-dom'

export interface IRoutes extends RouteProps {
  layout?: React.FC
  page?: React.FC
  routes?: IRoutes[]
}
