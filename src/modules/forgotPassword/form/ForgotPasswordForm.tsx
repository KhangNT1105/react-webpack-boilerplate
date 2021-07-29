import { InputAdornment, makeStyles } from '@material-ui/core'
import Dropdown from 'components/atoms/dropdown/Dropdown'
import InputField from 'components/atoms/inputField/InputField'
import { FIELD_TYPE, FORGOT_PASSWORD_FIELD, VARIANT } from 'constants/forms'
import { useFormik } from 'formik'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { checkValueError, validateRequired } from 'utils/validation'
import { IForgotPasswordForm } from './ForgotPasswordForm.d'
import countryCode from 'dummyData/countryCode.json'
import './ForgotPasswordForm.scss'
import Button from 'components/atoms/button/Button'

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
const ForgotPasswordForm: React.FC<IForgotPasswordForm> = ({
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
  const countryCodes = useMemo(
    () => [
      {
        title: 'All mobile number',
        items: countryCode.map((item) => ({
          label: item.label,
          value: item.value,
        })),
      },
    ],
    []
  )
  const handleDropdownChange = (value: string) => {
    console.log(value)
  }
  return (
    <div className="forgotPasswordForm">
      <div className="forgotPasswordForm__wrapper">
        <div className="forgotPasswordForm__form">
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="form__field">
              <InputField
                fullWidth
                value={formik.values.numberPhone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={FORGOT_PASSWORD_FIELD.NUMBER_PHONE}
                label={t('NUMBER_PHONE_LABEL').toUpperCase()}
                error={
                  formik.touched.numberPhone &&
                  Boolean(formik.errors.numberPhone || false)
                }
                helperText={
                  formik.touched.numberPhone && formik.errors.numberPhone
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Dropdown
                        handleChange={handleDropdownChange}
                        items={[]}
                        defaultValue={countryCodes[0].items[0].value}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button
              className={classes.button}
              variant={VARIANT.CONTAINED}
              fullWidth
              type={FIELD_TYPE.SUBMIT}
            >
              {t('LOGIN/CONTINUE').toUpperCase()}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ForgotPasswordForm
