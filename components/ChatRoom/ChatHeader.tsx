"use client";

import { useChat } from "@/contexts/ChatContext";
import React from "react";
import { users } from "@/constants";
import Image from "next/image";
import { ChevronLeft, EllipsisVertical, Phone, Video } from "lucide-react";
import { useTheme } from "next-themes";

const ChatHeader = () => {
  const { chatId, setChatId } = useChat();

  const chatUser = users.find((user) => user.id === chatId);

  const { resolvedTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-3 border-b-[1px] border-gray-500 gap-2">
      <div className="flex items-center gap-2">
        <ChevronLeft
          className={`cursor-pointer mr-2 ${
            resolvedTheme == "dark" ? "text-slate-300" : "text-slate-700"
          }`}
          onClick={() => setChatId(0)}
        />
        <Image
          src={chatUser?.profile || "/icons/userAvatar.png"}
          alt="profile"
          height={45}
          width={45}
        />
        <div className="flex flex-col">
          <span
            className={`text-2xl font-bold overflow-hidden truncate ${
              resolvedTheme == "dark" ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {chatUser?.name}
          </span>
          <div
            className={`flex items-center overflow-hidden truncate ${
              resolvedTheme == "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {chatUser?.isOnline
              ? "Online"
              : chatUser?.lastseen && `last seen at ${chatUser?.lastseen}`}
          </div>
        </div>
      </div>
      <div
        className={`flex items-center gap-2 ${
          resolvedTheme == "dark" ? "text-slate-300" : "text-slate-700"
        }`}
      >
        <Phone className="cursor-pointer" height={25} width={25} />
        <div className="h-5 w-[2px] bg-[#64748b] rounded-xl"></div>
        <Video className="cursor-pointer" height={25} width={25} />
        <EllipsisVertical className="cursor-pointer ml-2" height={25} width={25} />
      </div>
    </div>
  );
};

export default ChatHeader;
