import React, { lazy, Suspense, useState } from 'react'
import './styles/index.scss'
import './i18n/i18n'
import Routes from 'routes'
import { Link, Route, Switch } from 'react-router-dom'
import AnonymousLayout from 'layouts/anonymous/AnonymousLayout'
import Error404 from 'pages/errors/error404/Error404'
const LoginPage = lazy(() => import('pages/login/LoginPage'))
const OnboardingPage = lazy(() => import('pages/onboarding/OnboardingPage'))
const HomePage = lazy(() => import('pages/home/HomePage'))
const SignUpPage = lazy(() => import('pages/signup/SignUpPage'))
const Error404Page = lazy(() => import('pages/errors/error404/Error404'))

const App: React.FC = () => {
  return (
    <>
      <Routes />
    </>
  )
}

export default App
