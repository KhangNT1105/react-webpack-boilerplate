import RewardsWrapper from 'modules/rewards/RewardsWrapper'
import React from 'react'
import { Helmet } from 'react-helmet'

const RewardsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rewards Catalogue</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <RewardsWrapper />
    </>
  )
}
export default RewardsPage
