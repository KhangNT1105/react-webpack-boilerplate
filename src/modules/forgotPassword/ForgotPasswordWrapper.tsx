import React from 'react'
import { useTranslation } from 'react-i18next'
import ForgotPasswordForm from './form/ForgotPasswordForm'
import './ForgotPasswordWrapper.scss'
import { IForgotPasswordFormValues } from './form/ForgotPasswordForm.d'
export default function ForgotPasswordWrapper() {
  const { t } = useTranslation()
  const initialValues: IForgotPasswordFormValues = {
    numberPhone: '',
  }
  const handleSubmit = async () => {}
  return (
    <div className="forgotPassword">
      <div className="forgotPassword__wrapper">
        <div className="forgotPassword__title">
          <h1>{t('FORGOT_PASSWORD/TITLE').toUpperCase()}</h1>
        </div>
        <div className="forgotPassword__description">
          <p>{t('FORGOT_PASSWORD/DESCRIPTION')}</p>
        </div>
        <ForgotPasswordForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
