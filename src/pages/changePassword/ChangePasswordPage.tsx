import ChangePasswordWrapper from 'modules/changePassword/ChangePasswordWrapper'
import React from 'react'
import { Helmet } from 'react-helmet'

const ChangePasswordPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Change Password </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ChangePasswordWrapper />
    </>
  )
}
export default ChangePasswordPage
