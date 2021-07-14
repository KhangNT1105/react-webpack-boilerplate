import { lazy } from 'react'
import { IRoutes } from './Routes.d'
import { RoutesString } from './routesString'
const AnonymousLayout = lazy(() => import('layouts/anonymous/AnonymousLayout'))
const MemberLayout = lazy(() => import('layouts/member/MemberLayout'))
const LoginPage = lazy(() => import('pages/login/LoginPage'))
const OnboardingPage = lazy(() => import('pages/onboarding/OnboardingPage'))
const HomePage = lazy(() => import('pages/home/HomePage'))
const SignUpPage = lazy(() => import('pages/signup/SignUpPage'))
const Error404Page = lazy(() => import('pages/errors/error404/Error404'))
const ForgotPasswordPage = lazy(
  () => import('pages/forgotPassword/ForgotPasswordPage')
)
const ChangePasswordPage = lazy(
  () => import('pages/changePassword/ChangePasswordPage')
)
const RewardsPage = lazy(() => import('pages/rewards/RewardsPage'))
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
      {
        path: RoutesString.ForgotPassword,
        page: ForgotPasswordPage,
      },
      {
        path: RoutesString.ChangePassword,
        page: ChangePasswordPage,
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
      {
        page: RewardsPage,
        path: RoutesString.Rewards,
      },
    ],
  },
  {
    page: Error404Page,
    path: '*',
  },
]
