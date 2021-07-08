import React from 'react'
import { IInputField } from './InputField.d'
import { makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    border: '1px solid #D9D9D9',
    borderRadius: 8,
    padding: '5px 0',
    '& div': {
      marginTop: '10px',
      '& input': {
        padding: '6px 16px 7px ',
      },
    },
    '& div:before, & div:after': {
      borderBottom: 'none !important',
    },
  },
  textField: {
    marginTop: '10px',
    paddingBottom: '6px',
  },
  label: {
    padding: '0 16px ',
    transform: 'translate(0px, 18px) scale(1)',
  },
  labelFocused: {
    transform: 'translate(3px, 9px) scale(0.8)',
  },
  labelAsterisk: {
    color: 'red',
  },
})

const InputField: React.FC<IInputField> = (props) => {
  const classes = useStyles()
  return (
    <TextField
      className={classes.root}
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
