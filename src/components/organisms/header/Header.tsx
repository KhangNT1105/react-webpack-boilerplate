import React, { useEffect } from 'react'
import './Header.scss'
import logo from 'assets/images/header/logo.png'
import { useTranslation } from 'react-i18next'
import { IHeaderNavigatorValues } from './Header.d'
import { NavLink } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import { useRef } from 'react'
const Header: React.FC = () => {
  const { t } = useTranslation()
  const headerRef = useRef(null)
  const items = [
    {
      label: t('HEADER/HOME'),
      to: '/',
    },
    {
      label: t('HEADER/PRIVILEGES'),
      to: '/',
    },
    {
      label: t('HEADER/EVENTS'),
      to: '/',
    },
    {
      label: t('HEADER/REWARDS'),
      to: '/',
    },
    {
      label: t('HEADER/STORES'),
      to: '/',
    },
  ]
  useEffect(() => {
    if (headerRef.current) {
      window.addEventListener('scroll', function () {
        let navArea = document.getElementById('navArea')

        if (window.pageYOffset > 0) {
          headerRef.current.classList.add('sticky')
        } else {
          headerRef.current.classList.remove('sticky')
        }
      })
    }
  }, [])
  const renderNavigator = (items: IHeaderNavigatorValues[]) =>
    items.map((item) => (
      <div className="navLink">
        <NavLink to={item.to}>{item.label?.toUpperCase()}</NavLink>
      </div>
    ))
  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrapper ">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__navigator">
          {renderNavigator(items)}
          <div className="header__info">
            <div className="header__info__search">
              <IoSearchOutline />
            </div>
            <div className="header__info__authentication">
              <div className="login">{t('HEADER/LOGIN').toUpperCase()}</div>
              <div className="signup">{t('HEADER/SIGNUP').toUpperCase()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
