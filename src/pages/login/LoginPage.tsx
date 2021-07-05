import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { userSelector } from 'store/selectors/auth/authSelector'
const LoginPage: React.FC = () => {
  const { t } = useTranslation()
  const user = useSelector(userSelector)
  console.log('user', user)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}
export default LoginPage
