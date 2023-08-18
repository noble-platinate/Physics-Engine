import React, { useState } from 'react';
import './gptInput.css'
import { SendOutlined } from '@ant-design/icons';
import { Row } from 'antd';

const ChatGptInput = (props) => {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    props.handleChange(1, 1)

  };

  return (
    <Row className="chat-container">
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your question..."
        />
        <button onClick={handleSendMessage}><SendOutlined /></button>
      </div>
      <div className="current-question">
        <strong>Current Question:</strong> {inputText}
      </div>
    </Row>
  );
};

export default ChatGptInput;
