import {
  FILE_SIZE_IMG,
  NUMBER_CURRENCY,
  NUMBER_PERCENT,
  DEFAULT_MAX_NUMBER_INPUT,
} from 'constants/commons'
import { FieldValidator, FormikValues } from 'formik'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import keys from 'lodash/keys'
import has from 'lodash/has'
import i18n from 'i18n/i18n'
import { IValidations } from './validationTypes'
import ENUMS from 'constants/enums'

const VALIDATE_CONSTANTS = {
  PASSWORD_MIN_LENGTH: 1,
  PASSWORD_MAX_LENGTH: 255,
  FIRST_NAME_MAX_LENGTH: 20,
  LAST_NAME_MAX_LENGTH: 20,
}

// eslint-disable-next-line
const emailFormat =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// eslint-disable-next-line
const notUnicodeFormat = /[^\u0000-\u00ff]/
const onlyContainCharacterRegex = /^[a-zA-Z@$!%*#?&\040]+$/
export const validFileExtensions = ['.jpg', '.jpeg', '.gif', '.png']

export const validateEmail = (email: string) => {
  const lowerCase = String(email).toLowerCase()
  if (!emailFormat.test(lowerCase) || notUnicodeFormat.test(lowerCase)) {
    return false
  }

  return true
}

export const validateRequired = (value: string) => {
  let error = true
  if (isEmpty(value) && isEmpty(value && value.toString())) {
    error = false
  }
  return error
}

export const validateArrayRequired = (value: string[]) => !isEmpty(value)

export const validateMinLength = (minLength: number) => (value: string) =>
  String(value).length >= minLength

export const validateOnlyPositiveNumber = (value: number) => Number(value) >= 0

export const validateMaxValue = (maxValue: number) => (value: number) =>
  value <= maxValue

export const validateCompareToField =
  (fieldName: string, comparisonOperatorName: 'gt' | 'lt' | 'gte' | 'lte') =>
  (value: number, formValues: any) => {
    const fieldNameValue = formValues[fieldName]
    if (typeof fieldNameValue !== 'undefined') {
      if (comparisonOperatorName === 'gt') return value > fieldNameValue
      if (comparisonOperatorName === 'lt') return value < fieldNameValue
      if (comparisonOperatorName === 'gte') return value >= fieldNameValue
      if (comparisonOperatorName === 'lte') return value <= fieldNameValue
    }
    return false
  }

export const validateMaxLength = (maxLength: number) => (value: string) =>
  String(value).length <= maxLength

export const validateContainLeastCharacter = (value: string) => {
  const character = value.replace(/[0-9]/g, '')
  return onlyContainCharacterRegex.test(character)
}

const containAtLeastNumberRegex = /(?=.*\d)/
export const validateContainLeastNumber = (value: string) =>
  containAtLeastNumberRegex.test(value)

export const validateAlphaNumeric: FieldValidator = (value: string) => {
  // eslint-disable-next-line
  const alphaNumRegex = /^[a-zA-Z0-9]+$/
  let error
  if (!value) {
    error = 'FORM_ERROR.REQUIRED_FIELD'
  } else if (!alphaNumRegex.test(value)) {
    error = 'FORM_ERROR.INVALID_DATA'
  }
  return error
}

export const validatePoint: FieldValidator = (value: number) => {
  let error
  if (!value) {
    error = 'FORM_ERROR.REQUIRED_FIELD'
  } else if (String(value).length >= 10) {
    error = 'FORM_ERROR.INVALID_DATA'
  }
  return error
}

export const validateNumber: FieldValidator = (value: string) => {
  const NumRegex = /^\d+$/
  let error
  if (!value) {
    error = 'FORM_ERROR.REQUIRED_FIELD'
  } else if (!NumRegex.test(value)) {
    error = 'FORM_ERROR.INVALID_DATA'
  }
  return error
}

export const validateNumberLarger0 = (value: string) => {
  if (value) {
    const regexp = /^\d+$/
    let valid = true
    if (!regexp.test(value)) {
      valid = false
    }
    if (Number(value) <= 0) {
      valid = false
    }
    return valid
  }

  return true
}

export const validateNumberLargerMaxNumber = (value: string) => {
  if (value) {
    const regexp = /^\d+$/
    let valid = true
    if (!regexp.test(value)) {
      valid = false
    }
    if (Number(value) > DEFAULT_MAX_NUMBER_INPUT) {
      valid = false
    }
    return valid
  }

  return true
}
export const validateContainAtLeastOneCapitalCharacter = (value: string) => {
  if (value) {
    const regex = /(?=.*[A-Z])/
    return regex.test(value)
  }
  return true
}

export const validationRules = {
  required: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR.REQUIRED_FIELD',
    },
  ],
  email: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR_REQUIRED_FIELD_EMAIL',
    },
    {
      validator: validateEmail,
      code: 'FORM_ERROR.INVALID_FIELD_EMAIL',
    },
  ],
  password: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR_REQUIRED_FIELD_PASSWORD',
    },
    {
      validator: validateMinLength(VALIDATE_CONSTANTS.PASSWORD_MIN_LENGTH),
      code: 'FORM_ERROR_REQUIRED_FIELD_PASSWORD_MIN_LENGTH',
    },
    {
      validator: validateMaxLength(VALIDATE_CONSTANTS.PASSWORD_MAX_LENGTH),
      code: 'FORM_ERROR_REQUIRED_FIELD_PASSWORD_MAX_LENGTH',
    },
  ],
  terms: [
    {
      validator: validateRequired,
      code: 'FORM_ERROR_REQUIRED_FIELD_TERMS',
    },
  ],
}

export const ValidateExtensionImg = ({
  oInput,
  acceptTypeFile,
}: {
  oInput: HTMLInputElement
  acceptTypeFile: any
}) => {
  const sFileName = oInput.value
  const acceptedTypes =
    (!isEmpty(acceptTypeFile) && acceptTypeFile?.split(',')) ||
    validFileExtensions

  if (sFileName.length > 0) {
    let blnValid = false
    for (let j = 0; j < acceptedTypes.length; j++) {
      const sCurExtension = acceptedTypes[j].trim()
      if (
        sFileName
          .substr(sFileName.length - sCurExtension.length, sCurExtension.length)
          .toLowerCase() === sCurExtension.toLowerCase().trim()
      ) {
        blnValid = true
        break
      }
    }

    if (!blnValid) {
      return false
    }
  }

  return true
}

export const ValidateExtensionImgFromSrc = ({
  src,
  acceptTypeFile,
}: {
  src: string
  acceptTypeFile: any
}) => {
  if (!src) return false

  const acceptedTypes =
    (!isEmpty(acceptTypeFile) && acceptTypeFile?.split(',')) ||
    validFileExtensions

  let blnValid = false
  for (let j = 0; j < acceptedTypes.length; j++) {
    const sCurExtension = acceptedTypes[j].trim()
    if (
      src
        .substr(src.length - sCurExtension.length, sCurExtension.length)
        .toLowerCase() === sCurExtension.toLowerCase().trim()
    ) {
      blnValid = true
      break
    }
  }

  if (!blnValid) {
    return false
  }

  return true
}

export const ValidateSizeImg = (file: any) => {
  const FileSize = file.files[0].size / 1024 / 1024 // in MB
  if (FileSize > FILE_SIZE_IMG) {
    return false
  }
  return true
}

export const validateNumberDiscountValue: FieldValidator = (value: string) => {
  let error
  if (!value) {
    error = ''
  } else if (isNaN(Number(value))) {
    error = 'FORM_ERROR.INVALID_DATA'
  } else if (Number(value) === 0 || Number(value) > NUMBER_CURRENCY) {
    error = 'DISCOUNT_VALUE_MUST_BE_SMALLER_THAN_99999999'
  }
  return error
}

export const validatePercentDiscountValue = (value: string) => {
  const NumberPercent = /^\d{0,2}(\.[1-9])?$/
  let error = ''
  if (!value) {
    error = ''
  } else if (isNaN(Number(value))) {
    error = 'FORM_ERROR.INVALID_DATA'
  } else {
    if (Number(value) === 0 || Number(value) > NUMBER_PERCENT) {
      error = 'PLEASE_ENTER_THE_NUMBER_FROM_0_TO_100'
    } else if (!NumberPercent.test(value)) {
      error = 'FORM_ERROR.INVALID_DATA'
    }
  }
  return error
}

export const validateValueType = (value: string) => {
  let error = ''
  if (!value) {
    error = 'FORM_ERROR.REQUIRED_FIELD'
  } else if (isNaN(Number(value))) {
    error = 'FORM_ERROR.INVALID_DATA'
  }

  return error
}

export const checkValueError =
  (validations: IValidations) => (values: FormikValues, props?: any) => {
    const error: { [key: string]: any } = {}
    let checkValidate = false
    keys(validations).forEach((path: string) => {
      const pathValue = get(values, path)
      const isExistingKey = has(values, path)
      if (!isExistingKey) {
        // tslint:disable-next-line:no-console
        console &&
          console.error(`The field ${path} does not existing on the form`)
      }
      for (let i = 0; i < validations[path].length; i += 1) {
        const pathItem = validations[path][i] ?? {}
        checkValidate = pathItem.validator(pathValue, values, props)
        if (!checkValidate) {
          const code = pathItem.code
          const codeOptions = pathItem.codeOptions ?? {}
          const codeOptionLength = Object.entries(codeOptions)?.length
          error[path] =
            codeOptionLength > 0
              ? i18n.t(code, { ...codeOptions })
              : i18n.t(code)
          return error
        }
      }
    })

    return error
  }

export const validateOnlyAlphaNumeric = (value: string) => {
  if (value) {
    const alphaNumRegex = /^[a-zA-Z0-9\s\u0600-\u06FF]+$/
    let error = true
    if (!alphaNumRegex.test(value)) {
      error = false
    }

    return error
  }

  return true
}
export const validateIsUrl = (value: string) => {
  if (value) {
    const regexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
    let error = true
    if (!regexp.test(value)) {
      error = false
    }

    return error
  }

  return true
}

export const validateHourFormat = (value: string) => {
  if (value) {
    const regexp = /^(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/
    let error = true
    if (!regexp.test(value)) {
      error = false
    }

    return error
  }

  return true
}

export const validateCapitalMinLength = (value: string) => /[A-Z]/.test(value)

export const validateURLWebsite = (value: string) => {
  // eslint-disable-next-line
  const regexp =
    /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
  if (!value) return false
  if (regexp.test(value)) {
    return true
  }
  return false
}

export const validStringWithoutBlank = (value: string) => {
  if (value.indexOf(' ') > 1) {
    return false
  }
  return true
}

export const validStringWithoutUppercase = (value: string) => {
  const regexp = /[A-Z]+/g
  if (!value) return false
  if (regexp.test(value)) {
    return false
  }
  return true
}

export const validateKeyProject = (value: string) => {
  const regexp = /^[A-Z][A-Z0-9]+/g
  if (!value) return false
  if (regexp.test(value)) {
    return true
  }
  return false
}

export const validateImageType = (fileName: string) => {
  const regexp = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
  if (regexp.test(fileName)) {
    return true
  }
  return false
}

export const timeSince = (date: string) => {
  const remainDate = new Date().getTime() - new Date(date).getTime()

  const seconds = Math.floor(remainDate / 1000)

  let interval = seconds / ENUMS.SECONDS.YEAR

  if (interval > 1) {
    return `${Math.floor(interval)} ${i18n.t('DATE.YEARS_AGO')}`
  }
  interval = seconds / ENUMS.SECONDS.MONTH
  if (interval > 1) {
    return `${Math.floor(interval)} ${i18n.t('DATE.MONTHS_AGO')}`
  }
  interval = seconds / ENUMS.SECONDS.DAY
  if (interval > 1) {
    return `${Math.floor(interval)} ${i18n.t('DATE.DAYS_AGO')}`
  }
  interval = seconds / ENUMS.SECONDS.HOUR
  if (interval > 1) {
    return `${Math.floor(interval)} ${i18n.t('DATE.HOURS_AGO')}`
  }
  interval = seconds / ENUMS.SECONDS.MINUTE
  if (interval > 1) {
    return `${Math.floor(interval)} ${i18n.t('DATE.MINUTES_AGO')}`
  }
  return `${Math.floor(interval)} ${i18n.t('DATE.SECONDS_AGO')}`
}
export const validateURL = (str: string) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(str)
}

export const validStringWithoutSpecialCharacter = (value: string) => {
  const regexp =
    /`|~|!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\[|\{|\]|\}|\||\\|'|<|,|\.|>|\?|\/|"|;|:/g
  if (!value) return false
  if (regexp.test(value)) {
    return false
  }
  return true
}
