import {
  FormControlLabel,
  Checkbox as CheckboxMI,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
import { ICheckbox } from './Checkbox.d'
const useStyles = makeStyles({
  label: {
    '& span': {
      fontFamily: 'Montserrat',
    },
  },
  iconChecked: {
    color: '#E21936 !important',
  },
})
const Checkbox: React.FC<ICheckbox> = ({ label, ...props }) => {
  const classes = useStyles()
  return (
    <FormControlLabel
      className={classes.label}
      control={
        <CheckboxMI classes={{ checked: classes.iconChecked }} {...props} />
      }
      label={label}
    />
  )
}
export default Checkbox
