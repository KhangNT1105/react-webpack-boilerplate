import React, { useState } from 'react'
import './Hamburger.scss'
export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((value) => !value)
  return (
    <div className={`hamburger ${isOpen && 'active'}`} onClick={handleClick}>
      <span></span>
    </div>
  )
}
