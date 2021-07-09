import React from 'react'
import { useTranslation } from 'react-i18next'
import './SignUpWrapper.scss'
import SignUpForm from './form/SignUpForm'
const SignUpWrapper: React.FC = () => {
  const { t } = useTranslation()
  const initialValues = {
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
  }
  const handleSubmit = async () => {}
  return (
    <div className="signUp">
      <div className="signUp__wrapper">
        <div className="signUp__title">
          <h1>{t('SIGNUP/TITLE').toUpperCase()}</h1>
        </div>
        <div className="signUp__description">
          <p>{t('SIGNUP/DESCRIPTION')}</p>
        </div>
        <SignUpForm handleSubmit={handleSubmit} initialValues={initialValues} />
      </div>
    </div>
  )
}
export default SignUpWrapper
