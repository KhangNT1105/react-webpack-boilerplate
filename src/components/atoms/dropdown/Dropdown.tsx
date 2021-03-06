import React from 'react'
import './Dropdown.scss'
import { IDropdown, IDropdownItem } from './Dropdown.d'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import useClickOutside from 'customHooks/useClickOutside'
const Dropdown: React.FC<IDropdown> = ({
  handleChange,
  id,
  items,
  fieldId,
  defaultValue,
  dropdownPosition = 'bottom right',
  placeholder,
  hasIcon,
}) => {
  const { t } = useTranslation()
  const [value, setValue] = useState<string>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef(null)
  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)
  useClickOutside(dropdownRef, handleClose)
  // useEffect(() => {}, [placeholder])
  useEffect(() => {
    setValue(defaultValue || placeholder || t('DROPDOWN/SELECT_HERE'))
    // if (defaultValue) {
    //   handleChange?.(defaultValue)
    // }
  }, [defaultValue])
  const onChange = (value: string) => () => {
    setValue(value)
    handleChange?.(value)
    handleClose()
  }

  const renderItems = (items: IDropdownItem[]) => {
    return (
      items &&
      items.map((item, index) =>
        item.items && item.items.length > 0 ? (
          <div className="dropdown-wrapper" key={`dropdown-item-${index}`}>
            <div className="dropdown-wrapper__title">{item.title}</div>
            <div className="dropdown-wrapper__content">
              {renderItems(item.items)}
            </div>
          </div>
        ) : (
          <div
            className="dropdown-item"
            key={`dropdown-item-${index}`}
            onClick={onChange(item.value || '')}
          >
            {item.label}
          </div>
        )
      )
    )
  }
  const dropdownItemsClassName = isOpen
    ? `dropdown__items ${dropdownPosition} open`
    : `dropdown__items ${dropdownPosition}`
  return (
    <div className="dropdown" id={id} ref={dropdownRef}>
      <div className="dropdown__wrapper">
        <div className="dropdown__label" onClick={handleOpen}>
          {value}
          {items.length > 0 && (
            <span className="icon">
              <IoIosArrowDown />
            </span>
          )}
        </div>
        <div className={dropdownItemsClassName}>{renderItems(items)}</div>
      </div>
    </div>
  )
}
export default Dropdown
