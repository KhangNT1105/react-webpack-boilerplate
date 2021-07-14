export interface IChangePasswordForm {
  initialValues: IChangePasswordFormValues
  handleSubmit: () => Promise<void>
}
export interface IChangePasswordFormValues {
  newPassword: string
  confirmPassword: string
}
