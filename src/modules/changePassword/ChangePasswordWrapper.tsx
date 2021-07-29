import React from 'react'
import './ChangePasswordWrapper.scss'
import { useTranslation } from 'react-i18next'
import ChangePasswordForm from './form/ChangePasswordForm'
import { IChangePasswordFormValues } from './form/ChangePasswordForm.d'
import ChangePasswordBanner from './banner/ChangePasswordBanner'
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
        <ChangePasswordBanner />

        <ChangePasswordForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
export default ChangePasswordWrapper
