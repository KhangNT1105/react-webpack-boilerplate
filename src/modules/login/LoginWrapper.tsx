import React from 'react'
import { useTranslation } from 'react-i18next'
import LoginTitle from './title/LoginTitle'
import LoginForm from './form/LoginForm'
import './LoginWrapper.scss'
import LoginFooter from './footer/LoginFooter'
import Spinner from 'components/atoms/spinner/Spinner'
const LoginWrapper: React.FC = () => {
  const { t } = useTranslation()
  const initialValues = {
    numberPhone: '',
    password: '',
  }
  const handleSubmit = async () => {}
  return (
    <div className="login">
      <div className="login__wrapper">
        <LoginTitle />
        <LoginForm initialValues={initialValues} handleSubmit={handleSubmit} />
        <LoginFooter />
      </div>
    </div>
  )
}
export default LoginWrapper
