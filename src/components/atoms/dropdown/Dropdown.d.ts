export interface IDropdown {
  handleChange: (value: string) => void
  items: IDropdownItem[]
  fieldId?: string
  id?: string
  defaultValue?: string
}

export interface IDropdownItem {
  title?: string
  label?: string
  value?: string
  items?: IDropdownItem[]
}
