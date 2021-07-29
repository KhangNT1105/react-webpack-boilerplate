import Footer from 'components/organisms/footer/Footer'
import Header from 'components/organisms/header/Header'
import React, { useEffect, useLayoutEffect } from 'react'
import './MemberLayout.scss'
import arrowTop from 'assets/images/arrowTop.png'
import { useTranslation } from 'react-i18next'
import { throttle } from 'utils/helper'
import { useRef } from 'react'
import ErrorBoundary from 'containers/errorBoundary/ErrorBoundary'
const MemberLayout: React.FC = ({ children }) => {
  const scrollTopRef = useRef<any>(null)
  useLayoutEffect(() => {
    return () => {
      window.scrollTo({
        top: 0,
      })
    }
  }, [])
  const handleScroll = () => {
    if (window.scrollY > 500) {
      scrollTopRef?.current?.classList?.add('active')
    } else {
      scrollTopRef?.current?.classList?.remove('active')
    }
  }
  const handleClickScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 500))
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const { t } = useTranslation()
  return (
    <div className="memberLayout">
      <div className="memberLayout__wrapper">
        <div className="memberLayout__header">
          <Header />
        </div>
        <div className="memberLayout__content">
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
        <div className="memberLayout__footer">
          <Footer />
        </div>
        <div
          className="memberLayout__scrollToTop"
          onClick={handleClickScrollToTop}
          ref={scrollTopRef}
        >
          <div className="memberLayout__scrollToTop__icon">
            <img src={arrowTop} alt="arrow top" />
          </div>
          <div className="memberLayout__scrollToTop__text">
            {t('ON_TOP').toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  )
}
export default MemberLayout
