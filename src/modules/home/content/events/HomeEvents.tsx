import React from 'react'
import './HomeEvents.scss'
import { useTranslation } from 'react-i18next'
import event1 from 'assets/images/home/event1.png'
import event2 from 'assets/images/home/event2.png'
import event3 from 'assets/images/home/event3.png'
import event4 from 'assets/images/home/event4.png'
import event5 from 'assets/images/home/event5.png'
import event6 from 'assets/images/home/event6.png'
import { Link } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'
const HomeEvents: React.FC = () => {
  const items = [event1, event2, event3, event4, event5, event6]
  const { t } = useTranslation()
  const renderItems = (items: string[]) =>
    items.map((item, index) => (
      <Link
        to={RoutesString.EventDetail.replace(':id', 'abc')}
        className="event"
        key={`event-${index}`}
      >
        <img src={item} alt="event" />
      </Link>
    ))
  return (
    <div className="homeEvents">
      <div className="homeEvents__wrapper container">
        <div className="homeEvents__title">
          <h5>{t('HOME/LATEST_PROMOS')}</h5>
          <Link to={RoutesString.Home} className="seeAll">
            {t('HOME/SEE_ALL').toUpperCase()}
          </Link>
        </div>
        <div className="homeEvents__content">
          <div className="homeEvents__content__events">
            {renderItems(items)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeEvents
