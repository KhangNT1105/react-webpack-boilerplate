import React, { useEffect, useLayoutEffect, useState } from 'react'
import './Header.scss'
import { useTranslation } from 'react-i18next'
import { IHeaderNavigatorValues } from './Header.d'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import qrCode from 'assets/images/qr.png'
import user from 'assets/images/user.png'
import Hamburger from 'components/atoms/hamburger/Hamburger'
import { RoutesString } from 'routes/routesString'
import UserDropdown from 'components/molecules/userDropdown/UserDropdown'
import { debounce } from 'utils/helper'
const Header: React.FC = () => {
  const { t } = useTranslation()
  const headerRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const items = [
    {
      label: t('HOME'),
      to: RoutesString.Home,
      exact: true,
    },
    {
      label: t('PRIVILEGES'),
      to: '/abc',
    },
    {
      label: t('EVENTS'),
      to: '/bcd',
    },
    {
      label: t('REWARDS'),
      to: '/edf',
    },
    {
      label: t('STORES'),
      to: '/ged',
    },
  ]
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      headerRef.current &&
        headerRef.current?.classList &&
        headerRef.current?.classList?.add('sticky')
    } else {
      headerRef.current &&
        headerRef.current?.classList &&
        headerRef.current?.classList?.remove('sticky')
    }
  }
  useLayoutEffect(() => {
    if (headerRef.current) {
      handleScroll()
    }
  }, [])
  useEffect(() => {
    if (headerRef.current) {
      window.addEventListener('scroll', debounce(handleScroll, 0))
    }
    return () => window.removeEventListener('scroll', debounce(handleScroll, 0))
  }, [])
  const renderNavigator = (items: IHeaderNavigatorValues[]) =>
    items.map((item, idx) => (
      <div className="navLink" key={`navLink-${idx}`}>
        <NavLink
          exact={item.exact || false}
          activeClassName="active"
          to={item.to}
        >
          {item.label?.toUpperCase()}
        </NavLink>
      </div>
    ))
  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrapper ">
        <div className="header__pc">
          <div className="header__logo">
            <div className="header__logo__img">
              <NavLink to={RoutesString.Home}>Logo</NavLink>
            </div>

            {/* <div className="header__logo__text">Logo</div> */}
          </div>
          <div className="header__navigator">{renderNavigator(items)}</div>
          <div className="header__info">
            {/* <div className="header__info__authentication">
              <div className="login-btn">{t('HEADER/LOGIN').toUpperCase()}</div>
              <div className="signup-btn">{t('HEADER/SIGNUP').toUpperCase()}</div>
            </div> */}
            <div className="header__info__qr">
              <img src={qrCode} alt="qr code" />
            </div>
            <div className="header__info__user">
              <img src={user} alt="user" />
              <span>Cindy</span>
              <div className="header__info__user__dropdown">
                <div className="header__info__user__dropdown__wrapper">
                  <UserDropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__mb">
          <div className="header__mb__wrapper">
            <div className="header__mb__logo">
              <NavLink to={RoutesString.Home}>Logo</NavLink>
            </div>
            {/* <div className="header__mb__notification">
              <img src={letter} alt="letter" />
            </div> */}
            <div className="header__mb__icon">
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
