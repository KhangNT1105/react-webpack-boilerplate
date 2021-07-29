import AuthGuard from 'guards/auth/AuthGuard'
import { lazy } from 'react'
import { IRoutes } from './Routes.d'
import { RoutesString } from './routesString'

const AnonymousLayout = lazy(() => import('layouts/anonymous/AnonymousLayout'))
const MemberLayout = lazy(() => import('layouts/member/MemberLayout'))
const LoginPage = lazy(() => import('pages/login/LoginPage'))
const HomePage = lazy(() => import('pages/home/HomePage'))
const SignUpPage = lazy(() => import('pages/signup/SignUpPage'))

const Error404Page = lazy(() => import('pages/errors/error404/Error404'))
const ForgotPasswordPage = lazy(
  () => import('pages/forgotPassword/ForgotPasswordPage')
)
const ResetPassword = lazy(
  () => import('pages/resetPassword/ResetPasswordPage')
)

export const routesConfig: IRoutes[] = [
  {
    layout: MemberLayout,
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        page: HomePage,
        path: RoutesString.Home,
      },
    ],
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
        exact: true,
        path: RoutesString.SignUp,
        page: SignUpPage,
      },
      {
        exact: true,
        path: RoutesString.ForgotPassword,
        page: ForgotPasswordPage,
      },
      {
        exact: true,
        page: ResetPassword,
        path: RoutesString.ResetPassword,
      },
    ],
  },

  {
    page: Error404Page,
    path: '*',
  },
]
