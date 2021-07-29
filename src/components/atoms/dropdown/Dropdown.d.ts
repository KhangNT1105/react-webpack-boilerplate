export type IDropdownPosition =
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'

export interface IDropdown {
  handleChange: (value: string) => void
  items: IDropdownItem[]
  fieldId?: string
  id?: string
  defaultValue?: string
  dropdownPosition?: IDropdownPosition
  placeholder?: string
  hasIcon?: boolean
}

export interface IDropdownItem {
  title?: string
  label?: string
  value?: string
  items?: IDropdownItem[]
}
