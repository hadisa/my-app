import React, { useState } from "react";

const Message = () => {
  const [showMessage, setShowMessage] = useState(true);
  function handleMessage() {
    if (showMessage) {
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  }
  return (
    <div className="w-96 border border-gray-100 shadow-md p-6 bg-slate-200 flex flex-col">
      <p>{showMessage && "Welcome To React!"}</p>
      <p>{showMessage ? "Show Message" : "Hide Message"}</p>

      <buton className="bg-blue-500 hover:bg-blue-700 text-gray-900 font-bold py-2 px-4 rounded-lg" onClick={handleMessage}>Click on Me</buton>
    </div>
  );
};

export default Message;
