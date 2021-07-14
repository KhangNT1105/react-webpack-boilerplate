import React from 'react'
import ForgotPasswordWrapper from 'modules/forgotPassword/ForgotPasswordWrapper'
import { Helmet } from 'react-helmet'

const ForgotPassword: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forgot Password </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ForgotPasswordWrapper />
    </>
  )
}
export default ForgotPassword
