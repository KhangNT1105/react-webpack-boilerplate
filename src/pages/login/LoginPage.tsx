import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { userSelector } from 'store/selectors/auth/authSelector'
import LoginWrapper from 'modules/login/LoginWrapper'
const LoginPage: React.FC = () => {
  const { t } = useTranslation()
  const user = useSelector(userSelector)
  console.log('user', user)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <LoginWrapper />
    </>
  )
}
export default LoginPage
