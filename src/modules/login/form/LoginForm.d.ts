export interface ILoginForm {
  initialValues: ILoginFormValues
  handleSubmit: () => Promise<void>
}

export interface ILoginFormValues {
  numberPhone: string
  password: string
}
