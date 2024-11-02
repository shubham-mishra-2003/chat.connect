"use client";

import React, { createContext, useContext, useState } from "react";

interface ChatContextProps {
  chatId: number;
  setChatId: (page: number) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [chatId, setChatId] = useState(0);
  return (
    <ChatContext.Provider value={{ chatId, setChatId }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a PageProvider");
  }
  return context;
};
