import React from 'react'
import { IInputField } from './InputField.d'
import { makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    '& > div': {
      border: '1px solid #D9D9D9',
      borderRadius: 8,
      padding: '21px 15px 17px',
      marginTop: 0,
      '& input': {
        padding: 0,
      },
      '& > div': {
        padding: 0,
        border: 'none',
      },
      '& p': {
        fontFamily: 'Montserrat',
        fontSize: '1rem',
      },
    },
    '& div:before, & div:after': {
      borderBottom: 'none !important',
    },
  },
  errorText: {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
  },
  textField: {
    marginTop: '10px',
    paddingBottom: '6px',
  },
  label: {
    padding: '0 16px ',
    transform: 'translate(0px, 22px) scale(1)',
  },
  labelFocused: {
    transform: 'translate(3px, 10px) scale(0.8)',
  },
  labelAsterisk: {
    color: 'red',
  },
  formControl: {
    backgroundColor: 'red !important',
  },
})

const InputField: React.FC<IInputField> = ({
  variant = 'standard',
  ...props
}) => {
  const classes = useStyles()
  return (
    <TextField
      variant={variant}
      className={classes.root}
      FormHelperTextProps={{
        className: classes.errorText,
      }}
      InputLabelProps={{
        classes: {
          root: classes.label,
          focused: classes.labelFocused,
          shrink: classes.labelFocused,
          asterisk: classes.labelAsterisk,
        },
      }}
      {...props}
    />
  )
}
export default InputField
