import React from 'react'
import HomeWrapper from 'modules/home/HomeWrapper'
import { Helmet } from 'react-helmet'
const HomePage: React.FC = () => {
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
