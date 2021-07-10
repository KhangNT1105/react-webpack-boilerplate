import React from 'react'
import { Helmet } from 'react-helmet'
import OnboardingWrapper from 'modules/onboarding/OnboardingWrapper'
const OnboardingPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <OnboardingWrapper />
    </>
  )
}
export default OnboardingPage
