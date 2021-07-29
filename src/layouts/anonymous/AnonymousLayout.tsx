import React from 'react'
import './AnonymousLayout.scss'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'
import HeaderAnonymous from 'components/organisms/headerAnonymous/HeaderAnonymous'
import ErrorBoundary from 'containers/errorBoundary/ErrorBoundary'
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
        <HeaderAnonymous />
        <div className="anonymousLayout__content">
          {!isLoginPath && (
            <div className="anonymousLayout__content__header">
              <RiArrowLeftSLine onClick={handleClickGoBack} />
            </div>
          )}
          <div className="anonymousLayout__content__wrapper">
            <ErrorBoundary>{children}</ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AnonymousLayout
