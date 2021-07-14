import React from 'react'
import RewardsBanner from './banner/RewardsBanner'
import './RewardsWrapper.scss'
const RewardsWrapper: React.FC = () => {
  return (
    <div className="rewards">
      <div className="rewards__wrapper">
        <RewardsBanner />
      </div>
    </div>
  )
}
export default RewardsWrapper
