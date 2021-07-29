export interface IResetPasswordForm {
  initialValues: IResetPasswordFormValues
  handleSubmit: () => Promise<void>
}
export interface IResetPasswordFormValues {
  newPassword: string
  confirmPassword: string
}
