import React from "react";
import styled from "styled-components";

const Chat = ({ sms, deleteSms }) => {
  return (
    <ChatCont>
      {sms.map((message, index) => (
        <SecondContainer>
          <Sms key={index}>
            <Time>{message.time}</Time> {message.text}
          </Sms>
          <DeleteButton onClick={() => deleteSms(index)}>Удалить</DeleteButton>
        </SecondContainer>
      ))}
    </ChatCont>
  );
};

export default Chat;
const ChatCont = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
`;

const Sms = styled.div`
  background-color: #ecf0f1;
  padding: 8px 12px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
`;

const Time = styled.span`
  color: #7f8c8d;
  font-size: 12px;
  margin-left: 10px;
`;

const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DeleteButton = styled.button`
  background-color: red;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
