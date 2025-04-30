import React, { useState } from "react";

const ChatInput = (props) => {
  const [text, setText] = useState("");

  const massageHandler = () => {
    props.smsSubmit(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напишите сообщение..."
      />
      {text !== "" ? <button onClick={massageHandler}>Отправить</button> : null}
    </div>
  );
};

export default ChatInput;
