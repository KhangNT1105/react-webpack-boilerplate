import React from 'react'
import './ProgressBar.scss'
import { IProgressBar } from './ProgressBar.d'
const ProgressBar: React.FC<IProgressBar> = ({ width }) => {
  return (
    <div className="progressBar">
      <div className="progressBar__process" style={{ width }} />
    </div>
  )
}
export default ProgressBar
