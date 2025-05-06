import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import UserInfo from "./components/UserInfo";
import styled from "styled-components";

function App() {
  const [sms, setSms] = useState([]);

  const addSmsHandler = (text) => {
    const newSms = {
      text: text,
      time: new Date().toLocaleTimeString(),
    };
    setSms([...sms, newSms]);
  };

  const deleteSmsHandler = (index) => {
    const smsDelete = sms.filter((_, i) => i !== index);
    setSms(smsDelete);
  };

  return (
    <ContainerDiv>
      <UserInfo />
      <Chat sms={sms} deleteSms={deleteSmsHandler} />
      <ContInput>
        <ChatInput smsSubmit={addSmsHandler} />
      </ContInput>
    </ContainerDiv>
  );
}

export default App;

const ContainerDiv = styled.div`
  background-color: green;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContInput = styled.div`
  padding: 10px;
`;
