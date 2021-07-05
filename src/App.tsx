import React, { useState } from 'react'
import './styles/index.scss'
import './i18n/i18n'
import Routes from 'routes'
import { Link } from 'react-router-dom'
const App: React.FC = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Routes />
    </>
  )
}

export default App
