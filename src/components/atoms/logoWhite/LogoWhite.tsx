import React from 'react'
import './LogoWhite.scss'
import logoWhite from 'assets/images/logo_white.png'
import logoTextWhite from 'assets/images/logo_text_white.png'
const LogoWhite = () => {
  return (
    <div className="logoWhite">
      <div className="logoWhite__logo">
        <img src={logoWhite} alt="logo" />
      </div>
      <img src={logoTextWhite} alt="logo text" />
    </div>
  )
}
export default LogoWhite
