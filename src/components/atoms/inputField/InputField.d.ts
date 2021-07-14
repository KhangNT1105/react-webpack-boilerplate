import {
  BaseTextFieldProps,
  FilledInputProps,
  FilledTextFieldProps,
  FormControlProps,
  InputLabelProps,
  InputProps,
  OutlinedTextFieldProps,
  TextFieldProps,
} from '@material-ui/core'
export type IVariant = 'filled' | 'outlined' | 'standard' | undefined
export interface IInputField
  extends StandardTextFieldProps,
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    BaseTextFieldProps {
  variant?: IVariant
}
