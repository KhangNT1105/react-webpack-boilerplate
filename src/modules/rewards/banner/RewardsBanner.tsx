import React from 'react'
import { useTranslation } from 'react-i18next'
import './RewardsBanner.scss'
import { MdKeyboardArrowRight } from 'react-icons/md'
const RewardsBanner: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="rewardsBanner">
      <div className="rewardsBanner__wrapper">
        <div className="rewardsBanner__title">
          <h1>{t('REWARDS/TITLE').toUpperCase()}</h1>
        </div>
        <div className="rewardsBanner__points">
          <p className="yourPoints">{t('REWARDS/YOUR_POINTS')}:</p>
          <p>
            <span className="points">3,764&nbsp;</span>
            <span>{t('POINTS')}</span>
          </p>
        </div>
        <div className="rewardsBanner__breadcrumb">
          <p>
            <span>{t('REWARDS/VIEW_MY_REWARDS')}</span>
            <MdKeyboardArrowRight />
          </p>
        </div>
      </div>
    </div>
  )
}
export default RewardsBanner
