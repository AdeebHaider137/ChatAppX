import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${itsMe ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex flex-col ${itsMe ? 'items-end' : 'items-start'} max-w-[70%]`}>
        <div className={`px-4 py-2 rounded-2xl ${
          itsMe 
            ? 'bg-green-500 text-white rounded-tr-none' 
            : 'bg-gray-700 text-gray-200 rounded-tl-none'
        }`}>
          <p className="text-sm">{message.message}</p>
        </div>
        <span className="text-xs text-gray-400 mt-1">{formattedTime}</span>
      </div>
    </div>
  );
}

export default Message;
