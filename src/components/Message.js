import React from 'react'
import '../css/message.css'
import { Avatar } from "@material-ui/core"

function Message() {
  return (
    <div className="message">
    <Avatar />
    <div className="message__info">
    <h4>chefdeano88
    <span className="message__timestamp">This is the timestamp</span>
    </h4>
    <p>This is a message</p>
    </div>
    </div>
  )
}

export default Message
