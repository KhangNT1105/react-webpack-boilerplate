import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { userSelector } from 'store/selectors/auth/authSelector'
import LoginWrapper from 'modules/login/LoginWrapper'
const LoginPage: React.FC = () => {
  const { t } = useTranslation()
  const user = useSelector(userSelector)
  console.log('user', user)
  return (
    <>
      <LoginWrapper />
    </>
  )
}
export default LoginPage
