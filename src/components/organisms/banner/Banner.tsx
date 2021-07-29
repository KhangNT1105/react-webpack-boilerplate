import React from 'react'
import './Banner.scss'
const Banner: React.FC = ({ children }) => {
  return (
    <div className="banner">
      <div className="banner__wrapper">{children}</div>
    </div>
  )
}
export default Banner
