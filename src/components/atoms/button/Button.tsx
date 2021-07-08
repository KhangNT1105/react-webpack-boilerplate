import React from 'react'
import { Button as ButtonMI } from '@material-ui/core'
import { IButton } from './Button.d'
const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <ButtonMI {...props}>{children}</ButtonMI>
}
export default Button
