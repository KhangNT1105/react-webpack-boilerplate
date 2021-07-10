import Footer from 'components/organisms/footer/Footer'
import Header from 'components/organisms/header/Header'
import React from 'react'
import './MemberLayout.scss'
const MemberLayout: React.FC = ({ children }) => {
  return (
    <div className="memberLayout">
      <div className="memberLayout__wrapper">
        <div className="memberLayout__header">
          <Header />
        </div>
        <div className="memberLayout__content">{children}</div>
        <div className="memberLayout__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default MemberLayout
