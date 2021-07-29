import React from 'react'
import './ResetPasswordWrapper.scss'
import { useTranslation } from 'react-i18next'
import ResetPasswordForm from './form/ResetPasswordForm'
import { IResetPasswordFormValues } from './form/ResetPasswordForm.d'
const ResetPasswordWrapper: React.FC = () => {
  const { t } = useTranslation()
  const initialValues: IResetPasswordFormValues = {
    newPassword: '',
    confirmPassword: '',
  }
  const handleSubmit = async () => {}
  return (
    <div className="resetPassword">
      <div className="resetPassword__wrapper">
        <div className="resetPassword__title">
          <h1>{t('RESET_PASSWORD/TITLE').toUpperCase()}</h1>
        </div>
        <div className="resetPassword__description">
          <p>{t('RESET_PASSWORD/DESCRIPTION')}</p>
        </div>
        <ResetPasswordForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
export default ResetPasswordWrapper
