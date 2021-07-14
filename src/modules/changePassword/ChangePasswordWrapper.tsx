import React from 'react'
import './ChangePasswordWrapper.scss'
import { useTranslation } from 'react-i18next'
import ChangePasswordForm from './form/ChangePasswordForm'
import { IChangePasswordFormValues } from './form/ChangePasswordForm.d'
const ChangePasswordWrapper: React.FC = () => {
  const { t } = useTranslation()
  const initialValues: IChangePasswordFormValues = {
    newPassword: '',
    confirmPassword: '',
  }
  const handleSubmit = async () => {}
  return (
    <div className="changePassword">
      <div className="changePassword__wrapper">
        <div className="changePassword__title">
          <h1>{t('CHANGE_PASSWORD/TITLE').toUpperCase()}</h1>
        </div>
        <div className="changePassword__description">
          <p>{t('CHANGE_PASSWORD/DESCRIPTION')}</p>
        </div>
        <ChangePasswordForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
export default ChangePasswordWrapper
