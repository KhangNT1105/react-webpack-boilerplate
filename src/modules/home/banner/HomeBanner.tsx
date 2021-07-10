import React from 'react'
import { useTranslation } from 'react-i18next'
import QrCode from 'assets/images/home/qrCode.png'
import './HomeBanner.scss'
const HomeBanner: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="homeBanner">
      <div className="homeBanner__wrapper">
        <div className="homeBanner__text">
          <h1>{t('HOME/WELCOME_BACK')}</h1>
        </div>
        <div className="homeBanner__information">
          <div className="homeBanner__information__left">
            <div className="homeBanner__information__tier">
              <p>GOLD MEMBER</p>
            </div>
            <div className="homeBanner__information__name">
              <h5>Cindy Andrea</h5>
              <p className="card-id">1234 4873 2637 2738</p>
            </div>
          </div>
          <div className="homeBanner__information__right">
            <div className="homeBanner__information__qr">
              <img src={QrCode} alt="qr code" />
            </div>
            <div className="homeBanner__information__points">
              <p>
                <span className="points">3,764</span> {t('HOME/POINTS')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
