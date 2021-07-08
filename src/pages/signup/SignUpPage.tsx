import React from 'react'
import { Helmet } from 'react-helmet'
import SignUpWrapper from 'modules/signup/SignUpWrapper'
const SignupPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SignUpWrapper />
    </>
  )
}
export default SignupPage
