import React from 'react'
import ChatItem from './ChatItem'

const Chat = (props) => {
  return (
    <div >
    {props.sms.map((item) => (
      <ChatItem text={item.text} time={item.time} />
    ))}
  </div>
  )
}

export default Chat
