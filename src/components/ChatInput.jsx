import React, { useState } from "react";
import styled from "styled-components";

const ChatInput = (props) => {
  const [text, setText] = useState("");

  const massageHandler = () => {
    props.smsSubmit(text);
    setText("");
  };

  return (
    <ContainerDiv>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напишите сообщение..."
      />
      {text !== "" ? <Button onClick={massageHandler}>Отправить</Button> : null}
    </ContainerDiv>
  );
};

export default ChatInput;

const ContainerDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
