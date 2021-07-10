import { lazy } from 'react'
import { IRoutes } from './Routes.d'
import { RoutesString } from './routesString'
import { Redirect } from 'react-router-dom'
import AnonymousLayout from 'layouts/anonymous/AnonymousLayout'
import MemberLayout from 'layouts/member/MemberLayout'
const LoginPage = lazy(() => import('pages/login/LoginPage'))
const OnboardingPage = lazy(() => import('pages/onboarding/OnboardingPage'))
const HomePage = lazy(() => import('pages/home/HomePage'))
const SignUpPage = lazy(() => import('pages/signup/SignUpPage'))
const Error404Page = lazy(() => import('pages/errors/error404/Error404'))

export const routesConfig: IRoutes[] = [
  {
    exact: true,
    page: Error404Page,
    path: RoutesString.Error404,
  },
  {
    layout: AnonymousLayout,
    path: '/',
    exact: true,
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
        path: RoutesString.Onboarding,
        page: OnboardingPage,
      },
      {
        page: () => <Redirect to={RoutesString.Error404} />,
      },
    ],
  },
  {
    layout: MemberLayout,
    path: '/home',
    routes: [
      {
        exact: true,
        page: HomePage,
        path: RoutesString.Home,
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
