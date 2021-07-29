import React from 'react'
import { Redirect } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'

const AuthGuard: React.FC = ({ children }) => {
  const isLoggedIn = false
  if (!isLoggedIn) return <Redirect to={RoutesString.Login} />

  return <>{children}</>
}

export default AuthGuard
