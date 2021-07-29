import React, { useEffect } from 'react'
import './Spinner.scss'
import logo from 'assets/images/spinner/icon.png'
import textSpinner from 'assets/images/spinner/textSpinner.png'
import { useSpring, animated } from 'react-spring'
const Spinner = () => {
  const [styles, api] = useSpring(() => ({ opacity: 1 }))
  useEffect(() => {
    return () => {
      api.start({ opacity: 0 })
    }
  }, [])

  return (
    <animated.div style={styles} className="spinner">
      <div className="spinner__wrapper">
        <div className="spinner__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </animated.div>
  )
}
export default Spinner
