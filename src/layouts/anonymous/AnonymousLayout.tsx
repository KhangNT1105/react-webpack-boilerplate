import React from 'react'

const AnonymousLayout: React.FC = ({ children }) => {
  return (
    <div className="anonymousLayout">
      anonymous layout
      <div className="anonymousLayout__content">{children}</div>
    </div>
  )
}
export default AnonymousLayout
