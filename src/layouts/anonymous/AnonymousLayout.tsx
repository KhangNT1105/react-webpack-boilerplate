import React from 'react'
import './AnonymousLayout.scss'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'
const AnonymousLayout: React.FC = ({ children }) => {
  const { location, push } = useHistory()
  const isLoginPath =
    location.pathname === RoutesString.Login ||
    location.pathname === RoutesString.Onboarding
  const handleClickGoBack = () => {
    push(RoutesString.Login)
  }
  return (
    <div className="anonymousLayout">
      <div className="anonymousLayout__wrapper">
        {!isLoginPath && (
          <div className="anonymousLayout__header" onClick={handleClickGoBack}>
            <RiArrowLeftSLine />
          </div>
        )}
        <div className="anonymousLayout__content">
          <div className="anonymousLayout__content__wrapper">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default AnonymousLayout
