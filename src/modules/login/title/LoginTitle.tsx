import React from 'react'
import { useTranslation } from 'react-i18next'
import './LoginTitle.scss'

const LoginTitle: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="login__title">
      <h1>
        {t('LOGIN/DISCOVERY_HIGH_END')} <br />{' '}
        <strong>{t('LOGIN/SHOPPING_EXPERIENCE')}</strong>
      </h1>
    </div>
  )
}
export default LoginTitle
