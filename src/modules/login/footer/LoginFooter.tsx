import React from 'react'
import './LoginFooter.scss'
import { useTranslation } from 'react-i18next'
import { RoutesString } from 'routes/routesString'
import { Link } from 'react-router-dom'
const LoginFooter: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="loginFooter">
      <div className="loginFooter__signUp">
        <p>
          {t('LOGIN/DONT_HAVE_AN_ACCOUNT')} &nbsp;
          <Link to={RoutesString.SignUp}>{t('LOGIN/SIGN_UP')}</Link>
        </p>
      </div>
      <div className="loginFooter__forgot">
        <Link to={RoutesString.SignUp}>
          {t('LOGIN/FORGOTTEN_YOUR_PASSWORD')}
        </Link>
      </div>
    </div>
  )
}
export default LoginFooter
