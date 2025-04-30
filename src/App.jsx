import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import UserInfo from "./components/UserInfo";

function App() {
  const [sms, setSms] = useState([]);

  const addSmsHandler = (text) => {
    const newMessage = {
      text: text,
      time: new Date().toLocaleTimeString(),
    };
    setSms([...sms, newMessage]);
  };
  return (
    <div>
      <UserInfo />
      <Chat sms={sms} />
      <ChatInput smsSubmit={addSmsHandler} />
    </div>
  );
}

export default App;
