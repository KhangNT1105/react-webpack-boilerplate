import React from 'react'
import './LoginForm.scss'
import { ILoginForm } from './LoginForm.d'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import {
  checkValueError,
  validateCapitalMinLength,
  validateMinLength,
  validateRequired,
} from 'utils/validation'
import { makeStyles } from '@material-ui/core'
import Button from 'components/atoms/button/Button'
import { FIELD_TYPE, LOGIN_FIELD } from 'constants/forms'
import InputField from 'components/atoms/inputField/InputField'
const validateFields = {
  numberPhone: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR/REQUIRED_FIELD',
    },
  ],
  password: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR/REQUIRED_FIELD',
    },
    {
      validator: validateMinLength(8),
      code: 'FORM_ERROR/PASSWORD_LENGTH',
      codeOptions: {
        number: 8,
      },
    },
    {
      validator: validateCapitalMinLength,
      code: 'FORM_ERROR/PASSWORD_CAPITAL_LENGTH',
    },
  ],
}

const useStyles = makeStyles({
  button: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 8,
    padding: '16px 0',
    fontSize: '1.25rem',
  },
})
const LoginForm: React.FC<ILoginForm> = ({ initialValues, handleSubmit }) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const formik = useFormik({
    initialValues,
    validate: checkValueError(validateFields),
    onSubmit: (values) => {
      handleSubmit()
    },
  })
  return (
    <div className="loginForm">
      <div className="loginForm__description">
        <p>{t('LOGIN/DESCRIPTION')}</p>
      </div>
      <div className="loginForm__form">
        <form action="" className="form">
          <div className="form__field">
            <InputField
              fullWidth
              id={`${LOGIN_FIELD.NUMBER_PHONE}Id`}
              name={LOGIN_FIELD.NUMBER_PHONE}
              label={t('LOGIN/NUMBER_PHONE_LABEL').toUpperCase()}
              value={formik.values.numberPhone}
              onChange={formik.handleChange}
              required={true}
              onBlur={formik.handleBlur}
              error={
                formik.touched.numberPhone && Boolean(formik.errors.numberPhone)
              }
              helperText={
                formik.touched.numberPhone && t(formik.errors.numberPhone)
              }
            />
          </div>
          <div className="form__field">
            <InputField
              fullWidth
              id={`${LOGIN_FIELD.PASSWORD}Id`}
              name={LOGIN_FIELD.PASSWORD}
              label={t('LOGIN/PASSWORD_LABEL').toUpperCase()}
              type={FIELD_TYPE.PASSWORD}
              value={formik.values.password}
              onChange={formik.handleChange}
              required={true}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && t(formik.errors.password)}
            />
          </div>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            {t('LOGIN/CONTINUE').toUpperCase()}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
