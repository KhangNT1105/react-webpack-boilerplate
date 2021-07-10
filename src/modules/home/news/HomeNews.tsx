import React from 'react'
import './HomeNews.scss'
import { useTranslation } from 'react-i18next'
import Carousel from 'components/molecules/Carousel'
import img1 from 'assets/images/home/carousel1.png'
const HomeNews: React.FC = () => {
  const carouselItems = [img1, img1, img1]
  const { t } = useTranslation()
  const carouselConfig = {
    images: carouselItems,
    slidesPerPage: 1,
    id: 'news',
  }
  return (
    <div className="homeNews">
      <div className="homeNews__wrapper">
        <div className="homeNews__title">
          <h2>{t('HOME/WHATS_ON').toUpperCase()}</h2>
          <p>{t('HOME/HAPPENING_RIGHT_NOW')}</p>
        </div>
        <div className="homeNews__carousel">
          <Carousel {...carouselConfig} />
        </div>
      </div>
    </div>
  )
}
export default HomeNews
