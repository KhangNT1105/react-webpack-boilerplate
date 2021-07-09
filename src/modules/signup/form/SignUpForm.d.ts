import React from 'react'

export interface ISignUpForm {
  initialValues: ISignUpFormValues
  handleSubmit: () => Promise<void>
}
export interface ISignUpFormValues {
  fullName: string
  email: string
  mobileNumber: string
  password: string
  confirmPassword?: string
  smsSubscription?: boolean
  edmSubscription?: boolean
  tnc?: boolean
}

export interface ISignUpField {
  id: string
  name: keyof ISignUpFormValues & string
  label: string | React.ReactNode
  type?: string
  required?: boolean
}
