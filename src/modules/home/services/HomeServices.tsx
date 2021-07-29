import React from 'react'
import { useTranslation } from 'react-i18next'
import './HomeServices.scss'
import service1 from 'assets/images/home/service1.png'
import Carousel from 'components/molecules/carousel/Carousel'
import { Link } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'
const HomeServices: React.FC = () => {
  const CAROUSEL_SERVICES_ID = 'services'
  const images = [service1, service1, service1]
  const { t } = useTranslation()
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
    },
  }
  return (
    <div className="homeServices">
      <div className="homeServices__wrapper container">
        <div className="homeServices__header">
          <div className="homeServices__section">
            <h4>{t('HOME/SPECIAL_SERVICES')}</h4>
          </div>
          <div className="homeServices__title">
            <h5>{t('HOME/EXCLUSIVE_FOR_YOU')}</h5>
            <Link to={RoutesString.Home} className="seeAll">
              {t('HOME/SEE_ALL').toUpperCase()}
            </Link>
          </div>
        </div>
        <div className="homeServices__content">
          <Carousel
            responsive={responsive}
            id={CAROUSEL_SERVICES_ID}
            images={images}
            disableDotsControls={false}
          />
        </div>
      </div>
    </div>
  )
}
export default HomeServices
