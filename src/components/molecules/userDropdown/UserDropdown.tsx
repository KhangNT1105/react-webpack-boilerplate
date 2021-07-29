import ProgressBar from 'components/atoms/progressBar/ProgressBar'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'
import { IUserDropdownRoute } from './UserDropdown.d'
import './UserDropdown.scss'
const UserDropdown: React.FC = () => {
  const { t } = useTranslation()
  const routes = [
    {
      title: t('MY_ACCOUNT'),
      to: RoutesString.Home,
    },
    {
      title: t('MY_REWARDS'),
      to: RoutesString.Home,
    },
    {
      title: t('MY_PROFILE'),
      to: RoutesString.Home,
    },
    {
      title: t('CHANGE_PASSWORD'),
      to: RoutesString.Home,
    },
    {
      title: t('LOG_OUT'),
      to: RoutesString.Home,
      onClick: () => {},
    },
  ]
  const renderRoutes = (routes: IUserDropdownRoute[]) =>
    routes.map((route) => (
      <div className="userDropdown__route">
        {route.onClick ? (
          <div className="userDropdown__route__title" onClick={route.onClick}>
            {route.title.toUpperCase()}
          </div>
        ) : (
          route.to && (
            <NavLink className="userDropdown__route__title" to={route.to}>
              {route.title.toUpperCase()}
            </NavLink>
          )
        )}
      </div>
    ))
  return (
    <div className="userDropdown">
      <div className="userDropdown__wrapper">
        <div className="userDropdown__info">
          <div className="userDropdown__info__points">
            <span className="points">3400 POINTS</span>
            <span className="dueDate">{t('EXPIRES_ON')} 31 Dec 2021</span>
          </div>
          <div className="userDropdown__info__progress">
            <ProgressBar width="60%" />
          </div>
          <div className="userDropdown__info__description">
            <span>Get 100 more points by 30 Jun 2021 to upgrade to Gold</span>
          </div>
        </div>
        <div className="userDropdown__routes">{renderRoutes(routes)}</div>
      </div>
    </div>
  )
}
export default UserDropdown
