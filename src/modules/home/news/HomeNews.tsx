import React from 'react'
import './HomeNews.scss'
import { useTranslation } from 'react-i18next'
import Carousel from 'components/molecules/carousel/Carousel'
import img2 from 'assets/images/home/carousel2.png'
const HomeNews: React.FC = () => {
  const carouselItems = [img2, img2, img2]
  const { t } = useTranslation()
  const carouselConfig = {
    images: carouselItems,
    slidesPerPage: 1,
    id: 'news',
    disableDotsControls: false,
  }
  return (
    <div className="homeNews">
      <div className="homeNews__wrapper">
        <div className="homeNews__mobile container">
          <div className="homeNews__mobile__title">
            <h2>{t('HOME/WHATS_ON').toUpperCase()}</h2>
            <p>{t('HOME/HAPPENING_RIGHT_NOW')}</p>
          </div>
          <div className="homeNews__mobile__carousel">
            <Carousel {...carouselConfig} paddingRight={10} />
          </div>
        </div>
        <div className="homeNews__pc">
          <div className="homeNews__pc__carousel">
            <Carousel {...carouselConfig} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeNews
