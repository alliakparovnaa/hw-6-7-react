import React from "react";

const ChatItem = (props) => {
  return (
    <div>
      <p>{props.text}</p> 
      <p>{props.time}</p>
    </div>
  );
};

export default ChatItem;
