import React from 'react'
import './HomeWrapper.scss'
import HomeBanner from './banner/HomeBanner'
import HomeNews from './news/HomeNews'
import HomeContent from './content/HomeContent'
import HomeServices from './services/HomeServices'
const HomeWrapper: React.FC = () => {
  return (
    <div className="home">
      <div className="home__wrapper">Home</div>
    </div>
  )
}
export default HomeWrapper
