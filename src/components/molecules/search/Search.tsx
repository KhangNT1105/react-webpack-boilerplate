import React from 'react'
import './Search.scss'
import { FiSearch } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
const Search: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__input">
          <input type="text" placeholder={t('SEARCH/PLACEHOLDER')} />
        </div>
        <div className="search__icon">
          <FiSearch />
        </div>
      </div>
    </div>
  )
}
export default Search
