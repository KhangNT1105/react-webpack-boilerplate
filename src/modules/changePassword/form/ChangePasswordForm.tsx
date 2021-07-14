import { makeStyles } from '@material-ui/core'
import Button from 'components/atoms/button/Button'
import InputField from 'components/atoms/inputField/InputField'
import { CHANGE_PASSWORD_FIELD, FIELD_TYPE, VARIANT } from 'constants/forms'
import { useFormik } from 'formik'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { checkValueError, validateRequired } from 'utils/validation'
import { IChangePasswordForm } from './ChangePasswordForm.d'
import './ChangePasswordForm.scss'
const validateFields = {
  numberPhone: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR/REQUIRED_FIELD',
    },
  ],
}
const useStyles = makeStyles({
  button: {
    backgroundColor: '#E21936',
    color: '#fff',
    borderRadius: 8,
    padding: '16px 0',
    fontSize: '1.25rem',
  },
})

const ChangePasswordForm: React.FC<IChangePasswordForm> = ({
  handleSubmit,
  initialValues,
}) => {
  const formik = useFormik({
    initialValues,
    validate: checkValueError(validateFields),
    onSubmit: () => {
      handleSubmit()
    },
  })
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className="changePasswordForm">
      <div className="changePasswordForm__wrapper">
        <div className="changePasswordForm__form">
          <form className="form">
            <div className="form__field">
              <InputField
                fullWidth
                id={`${CHANGE_PASSWORD_FIELD.NEW_PASSWORD}Id`}
                name={CHANGE_PASSWORD_FIELD.NEW_PASSWORD}
                label={t('NEW_PASSWORD_LABEL').toUpperCase()}
                type={FIELD_TYPE.PASSWORD}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                required={true}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.newPassword &&
                  Boolean(formik.errors.newPassword)
                }
                helperText={
                  formik.touched.newPassword &&
                  t(formik.errors.newPassword || '')
                }
              />
            </div>
            <div className="form__field">
              <InputField
                fullWidth
                id={`${CHANGE_PASSWORD_FIELD.CONFIRM_PASSWORD}Id`}
                name={CHANGE_PASSWORD_FIELD.CONFIRM_PASSWORD}
                label={t('CONFIRM_NEW_PASSWORD_LABEL').toUpperCase()}
                type={FIELD_TYPE.PASSWORD}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                required={true}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  t(formik.errors.confirmPassword || '')
                }
              />
            </div>
            <div className="form__submit">
              <Button
                className={classes.button}
                variant={VARIANT.CONTAINED}
                fullWidth
                type={FIELD_TYPE.SUBMIT}
              >
                {t('SUBMIT').toUpperCase()}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ChangePasswordForm
