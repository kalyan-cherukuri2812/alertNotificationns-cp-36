import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="n-bg-container">
      {children}
      <GrFormClose className="cnl-icon" />
    </div>
  )
}

export default Notification
