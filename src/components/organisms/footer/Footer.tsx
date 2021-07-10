import React from 'react'
import './Footer.scss'
import { FiFacebook } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
        <div className="footer__social">
          <div className="footer__social__facebook">
            <FiFacebook />
          </div>
          <div className="footer__social__instagram">
            <SiInstagram />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
