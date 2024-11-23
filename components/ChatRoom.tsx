"use client";

import React from "react";
import ChatHeader from "./ChatRoom/ChatHeader";
import { useChat } from "@/contexts/ChatContext";
import Image from "next/image";
import Chats from "./ChatRoom/Chats";
import MessageInput from "./ChatRoom/MessageInput";

const ChatRoom = () => {
  const { chatId } = useChat();
  return (
    <>
      {chatId == 0 ? (
        <div className="flex justify-center items-center flex-col h-full">
          <Image src="/icons/Logo.png" alt="Logo" height={150} width={150} />
          <h1 className="text-6xl font-bold text-gray-600 dark:text-gray-400">Chat App</h1>
          <h2 className="text-2xl font-bold text-gray-400 dark:text-gray-500">
            Connecting peoples with peer to peer encryption
          </h2>
        </div>
      ) : (
        <div className="flex flex-col h-full w-full">
          <ChatHeader />
          <Chats />
          <MessageInput />
        </div>
      )}
    </>
  );
};

export default ChatRoom;
