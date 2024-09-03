// src/App.js
import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput(""); // Clear input field after sending
    }
  };

  return (
    <div className="flex flex-col w-full max-w-6xl  mx-auto border border-gray-300 rounded-lg absolute h-[60vh]">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold">{msg.sender}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bg-white border-t border-gray-300">
        <input
          className="flex-1 p-2 mr-4 border border-gray-300 rounded-lg focus:outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
