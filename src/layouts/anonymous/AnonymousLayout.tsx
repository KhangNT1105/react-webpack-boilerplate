import React from 'react'
import './AnonymousLayout.scss'
const AnonymousLayout: React.FC = ({ children }) => {
  return (
    <div className="anonymousLayout">
      <div className="anonymousLayout__content">{children}</div>
    </div>
  )
}
export default AnonymousLayout
