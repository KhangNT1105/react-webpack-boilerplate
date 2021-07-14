export interface IForgotPasswordFormValues {
  numberPhone: string
}
export interface IForgotPasswordForm {
  initialValues: IForgotPasswordFormValues
  handleSubmit: () => Promise<void>
}
