import Breadcrumb from 'components/atoms/breadcrumb/Breadcrumb'
import Banner from 'components/organisms/banner/Banner'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RoutesString } from 'routes/routesString'
import './ChangePasswordBanner.scss'
const ChangePasswordBanner: React.FC = () => {
  const { t } = useTranslation()
  const items = {
    title: t('HOME'),
    to: RoutesString.Home,
    items: {
      title: t('CHANGE_PASSWORD'),
    },
  }
  return (
    <Banner>
      <div className="changePasswordBanner">
        <div className="changePasswordBanner__wrapper container">
          <div className="changePasswordBanner__breadcrumbs">
            <Breadcrumb items={items} />
          </div>
          <div className="changePasswordBanner__title">
            <h1>{t('CHANGE_PASSWORD/TITLE').toUpperCase()}</h1>
          </div>
        </div>
      </div>
    </Banner>
  )
}
export default ChangePasswordBanner
