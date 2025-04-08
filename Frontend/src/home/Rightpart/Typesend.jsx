import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/50 border-t border-gray-700">
      <div className="flex items-center p-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className={`ml-4 p-2 rounded-full ${
            loading || !message.trim()
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600'
          } transition duration-200`}
        >
          <IoSend className="text-xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
