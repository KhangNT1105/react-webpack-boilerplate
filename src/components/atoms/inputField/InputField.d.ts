import {
  BaseTextFieldProps,
  FilledInputProps,
  FilledTextFieldProps,
  InputLabelProps,
  InputProps,
  TextFieldProps,
} from '@material-ui/core'

export interface IInputField
  extends BaseTextFieldProps,
    TextFieldProps,
    InputProps,
    Partial<InputLabelProps>,
    Partial<FilledInputProps>,
    Partial<FilledTextFieldProps> {}
