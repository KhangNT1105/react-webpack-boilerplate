import { lazy } from 'react'
import { IRoutes } from './Routes.d'
import { RoutesString } from './routesString'
import { Redirect } from 'react-router-dom'
const AnonymousLayout = lazy(() => import('layouts/anonymous/AnonymousLayout'))
const MemberLayout = lazy(() => import('layouts/member/MemberLayout'))
const LoginPage = lazy(() => import('pages/login/LoginPage'))
const OnboardingPage = lazy(() => import('pages/onboarding/OnboardingPage'))
const HomePage = lazy(() => import('pages/home/HomePage'))
const SignUpPage = lazy(() => import('pages/signup/SignUpPage'))
const Error404Page = lazy(() => import('pages/errors/error404/Error404'))

export const routesConfig: IRoutes[] = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        exact: true,
        path: RoutesString.Onboarding,
        page: OnboardingPage,
      },
      {
        page: LoginPage,
        path: RoutesString.Login,
      },
      {
        path: RoutesString.SignUp,
        page: SignUpPage,
      },
    ],
  },
  {
    layout: MemberLayout,
    routes: [
      {
        page: HomePage,
        path: RoutesString.Home,
      },
    ],
  },
  {
    page: Error404Page,
    path: '*',
  },
]
