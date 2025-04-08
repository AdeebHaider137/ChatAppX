import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../../public/user.jpg";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="bg-gray-800/50 border-b border-gray-700">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <CiMenuFries className="text-white text-xl" />
          </label>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={profile} alt={selectedConversation.fullname} className="w-full h-full object-cover" />
              </div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                isOnline ? 'bg-green-500' : 'bg-gray-500'
              }`}></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">{selectedConversation.fullname}</h1>
              <p className="text-sm text-gray-400 flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                {isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
