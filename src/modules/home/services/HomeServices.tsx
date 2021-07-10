import React from 'react'
import { useTranslation } from 'react-i18next'
import './HomeServices.scss'
import service1 from 'assets/images/home/service1.png'
import Carousel from 'components/molecules/Carousel'
const HomeServices: React.FC = () => {
  const CAROUSEL_SERVICES_ID = 'services'
  const images = [service1, service1, service1]
  const { t } = useTranslation()
  return (
    <div className="homeServices">
      <div className="homeServices__wrapper">
        <div className="homeServices__header">
          <div className="homeServices__section">
            <h4>{t('HOME/SPECIAL_SERVICES')}</h4>
          </div>
          <div className="homeServices__title">
            <h5>{t('HOME/EXCLUSIVE_FOR_YOU')}</h5>
            <p>{t('HOME/SEE_ALL').toUpperCase()}</p>
          </div>
        </div>
        <div className="homeServices__content">
          <Carousel id={CAROUSEL_SERVICES_ID} images={images} />
        </div>
      </div>
    </div>
  )
}
export default HomeServices
