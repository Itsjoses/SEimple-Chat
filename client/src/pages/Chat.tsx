import React, { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../context/WebsocketContext";
import { IoMdChatboxes } from "react-icons/io";
import MessageList from "../components/bubbleChat/MessageList";
import { Message } from "../types/GlobalTypes";
export default function Chat() {
  const socket = useContext(WebsocketContext);
  const [message, setMessage] = useState<string>("");
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    const handleConnect = () => {
    };


    const handleMessage = (getMessage: any) => {
      const author = getMessage.senderId === socket.id ? 'mine' : 'other';
      setAllMessages((prevMessages) => [
        ...prevMessages,
        { author, message: getMessage.content.msg },
      ]);
    };

    socket.on('connect', handleConnect);
    socket.on('onMessage', handleMessage);

    return () => {
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);

  const sendChat = () => {
    socket.emit("newMessage", { msg: message });
    setMessage("");
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(message === '') return;
    sendChat()
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Mencegah textarea menambahkan baris baru
      if(message === '') return;
      sendChat()
    }
  };

  return (
    <div className="h-screen max-w-screen flex justify-center items-center bg-chat">
      <div className="lg:w-3/5 md:w-4/5 w-full h-full md:h-4/5 flex flex-col bg-white/95 px-4 py-2 rounded-lg">
        <div className="flex items-center gap-2 border-b py-2 border-[#bdbdbd]">
          <IoMdChatboxes className="text-4xl" />{" "}
          <span>Anonymous Public Chat</span>
        </div>
        <div className="flex-grow overflow-y-auto mb-4">
          <MessageList allMessage={allMessages} />
        </div>
        <div className="py-4 border-t border-[#bdbdbd]">
          <div className="border rounded-full px-2 py-1 border-[#bdbdbd]">
            <form action="" className="flex items-center" onSubmit={onSubmit}>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="bg-white/10 w-full flex-[8] outline-none rounded-full text-sm border-none p-2 overflow-y-hidden resize-none "
              />


              <button className="w-12 hover:text-blue-400">kirim</button>
            </form>
          </div>
        </div>
      </div>

      {/* <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='border border-gray-300 bg-gray-50'/>
      <button onClick={onSubmit} className='bg-red-300'>Submit</button> */}
    </div>
  );
}
