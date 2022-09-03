import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

import {Component} from 'react'
import Notification from '../Notification'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1>Alert Notifications</h1>
        <Notification>
          <AiFillCheckCircle className="icon suc-clr" />
          <div className="i-h-div">
            <h1 className="heading suc-clr">Success</h1>
            <p className="p">You can access all the files in the folder</p>
          </div>
        </Notification>

        <Notification>
          <RiErrorWarningFill className="icon err-clr" />
          <div className="i-h-div">
            <h1 className="heading err-clr">Error</h1>
            <p className="p">
              Sorry, You are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>

        <Notification>
          <MdWarning className="icon war-clr" />
          <div className="i-h-div">
            <h1 className="heading war-clr">Warning</h1>
            <p className="p">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>

        <Notification>
          <MdInfo className="icon inf-clr" />
          <div className="i-h-div">
            <h1 className="heading inf-clr">Info</h1>
            <p className="p">Anyone on the internet can view these files</p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
