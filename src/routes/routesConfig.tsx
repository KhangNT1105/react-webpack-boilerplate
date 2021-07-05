import { lazy } from 'react'
import { IRoutes } from './Routes.d'
import { RoutesString } from './routesString'
import { Redirect } from 'react-router-dom'
import AnonymousLayout from 'layouts/anonymous/AnonymousLayout'
const LoginPage = lazy(() => import('pages/login/LoginPage'))
const SignUpPage = lazy(() => import('pages/signup/SignUpPage'))
const Error404Page = lazy(() => import('pages/errors/error404/Error404'))

export const routesConfig: IRoutes[] = [
  {
    exact: true,
    page: Error404Page,
    path: RoutesString.Error404,
  },
  {
    exact: true,
    path: RoutesString.SignUp,
    page: SignUpPage,
  },
  {
    layout: AnonymousLayout,
    routes: [
      {
        exact: true,
        page: LoginPage,
        path: RoutesString.Login,
      },
      {
        page: () => <Redirect to={RoutesString.Error404} />,
      },
    ],
  },

  {
    path: '*',
    routes: [
      {
        component: () => <Redirect to={RoutesString.Error404} />,
      },
    ],
  },
]
