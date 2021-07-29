import './SignUpForm.scss'
import InputField from 'components/atoms/inputField/InputField'
import { FIELD_TYPE, SIGN_UP_FIELD } from 'constants/forms'
import { useFormik } from 'formik'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { getProperty } from 'utils/helper'
import {
  checkValueError,
  validateCapitalMinLength,
  validateMinLength,
  validateRequired,
} from 'utils/validation'
import { ISignUpField, ISignUpForm } from './SignUpForm.d'
import Checkbox from 'components/atoms/checkbox/Checkbox'
import { Link } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'
import Button from 'components/atoms/button/Button'
import { makeStyles } from '@material-ui/core'
const validateFields = {
  mobileNumber: [
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
  fullName: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR/REQUIRED_FIELD',
    },
  ],
  email: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR/REQUIRED_FIELD',
    },
  ],
  confirmPassword: [
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
const SignUpForm: React.FC<ISignUpForm> = ({ initialValues, handleSubmit }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  const formik = useFormik({
    initialValues,
    validate: checkValueError(validateFields),
    onSubmit: (values) => {
      handleSubmit()
    },
  })
  const commonFields: ISignUpField[] = [
    {
      id: `${SIGN_UP_FIELD.FULL_NAME}Id`,
      name: SIGN_UP_FIELD.FULL_NAME,
      label: t('SIGNUP/FULL_NAME_LABEL').toUpperCase(),
      required: true,
      type: FIELD_TYPE.TEXT,
    },
    {
      id: `${SIGN_UP_FIELD.EMAIL}Id`,
      name: SIGN_UP_FIELD.EMAIL,
      label: t('SIGNUP/EMAIL_LABEL').toUpperCase(),
      required: true,
      type: FIELD_TYPE.EMAIL,
    },
    {
      id: `${SIGN_UP_FIELD.MOBILE_NUMBER}Id`,
      name: SIGN_UP_FIELD.MOBILE_NUMBER,
      label: t('SIGNUP/MOBILE_NUMBER_LABEL').toUpperCase(),
      required: true,
      type: FIELD_TYPE.TEL,
    },
    {
      id: `${SIGN_UP_FIELD.PASSWORD}Id`,
      name: SIGN_UP_FIELD.PASSWORD,
      label: t('SIGNUP/PASSWORD_LABEL').toUpperCase(),
      required: true,
      type: FIELD_TYPE.PASSWORD,
    },
    {
      id: `${SIGN_UP_FIELD.CONFIRM_PASSWORD}Id`,
      name: SIGN_UP_FIELD.CONFIRM_PASSWORD,
      label: t('SIGNUP/CONFIRM_PASSWORD_LABEL').toUpperCase(),
      required: true,
      type: FIELD_TYPE.PASSWORD,
    },
  ]
  const checkboxFields: ISignUpField[] = [
    {
      id: `${SIGN_UP_FIELD.EDM_SUBSCRIPTION}Id`,
      name: SIGN_UP_FIELD.EDM_SUBSCRIPTION,
      label: t('SIGNUP/EDM_LABEL').toUpperCase(),
    },
    {
      id: `${SIGN_UP_FIELD.SMS_SUBSCRIPTION}Id`,
      name: SIGN_UP_FIELD.SMS_SUBSCRIPTION,
      label: t('SIGNUP/SMS_LABEL').toUpperCase(),
    },
  ]
  const tncField = [
    {
      id: `${SIGN_UP_FIELD.TNC}Id`,
      name: SIGN_UP_FIELD.TNC,
      label: (
        <strong>
          {t('I_AGREE_TO')}{' '}
          <Link to={RoutesString.Home}>{t('THE_TERMS_AND_CONDITIONS')}</Link>{' '}
          {t('AND')} <Link to={RoutesString.Home}>{t('PRIVACY_POLICY')} </Link>
        </strong>
      ),
    },
  ]
  const renderFields = (fields: ISignUpField[]) => {
    return fields.map((field, index) => {
      const { values, handleChange, touched, errors, handleBlur } = formik
      const value = getProperty(values, field.name) || ''
      const error =
        touched?.[field.name] && Boolean(errors?.[field.name] || false)
      const helperText = (touched?.[field.name] && errors?.[field.name]) || ''
      return (
        <div className="form__field" key={`${field.id}-${index}`}>
          <InputField
            fullWidth
            {...field}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error}
            helperText={helperText}
          />
        </div>
      )
    })
  }
  const renderCheckboxFields = (fields: ISignUpField[]) => {
    return fields.map((field, index) => {
      const { handleChange, values } = formik
      const value = getProperty(values, field.name) || ''
      return (
        <div key={`${field.id}-${index}`} className="form__checkboxField">
          <Checkbox value={value} onChange={handleChange} {...field} />
        </div>
      )
    })
  }

  return (
    <div className="signUpForm">
      <div className="signUpForm__wrapper">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form__textFields">{renderFields(commonFields)}</div>
          <div className="form__text">
            <p>{t('SIGNUP/RECEIVE_DESCRIPTION')}</p>
          </div>
          <div className="form__checkboxFields">
            {renderCheckboxFields(checkboxFields)}
          </div>
          <div className="form__tnc">{renderCheckboxFields(tncField)}</div>
          <div className="form__submit__mobile">
            <div className="form__submit__mobile__wrapper">
              <Button
                fullWidth={true}
                variant="contained"
                type={FIELD_TYPE.SUBMIT}
                className={classes.button}
              >
                {t('SUBMIT').toUpperCase()}
              </Button>
            </div>
          </div>
          <div className="form__submit__pc">
            <div className="form__submit__pc__wrapper">
              <Button
                fullWidth={true}
                variant="contained"
                type={FIELD_TYPE.SUBMIT}
                className={classes.button}
              >
                {t('SUBMIT').toUpperCase()}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUpForm
