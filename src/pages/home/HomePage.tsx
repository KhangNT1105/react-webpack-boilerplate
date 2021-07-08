import React from 'react'
import { Helmet } from 'react-helmet'
import HomeWrapper from 'modules/home/HomeWrapper'
const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomeWrapper />
    </>
  )
}
export default HomePage
