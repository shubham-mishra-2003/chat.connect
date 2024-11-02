"use client";

import { useChat } from "@/contexts/ChatContext";
import React from "react";
import { users } from "@/constants";
import Image from "next/image";
import { ChevronLeft, EllipsisVertical, Phone, Video } from "lucide-react";

const ChatHeader = () => {
  const { chatId, setChatId } = useChat();

  const chatUser = users.find((user) => user.id === chatId);

  return (
    <div className="flex justify-between items-center p-3 border-b-[1px] border-gray-500">
      <div className="flex items-center gap-2">
        <ChevronLeft
          className="cursor-pointer mr-2"
          onClick={() => setChatId(0)}
        />
        <Image
          src={chatUser?.profile || "/icons/userAvatar.png"}
          alt="profile"
          height={35}
          width={35}
        />
        <span className="text-2xl font-bold">{chatUser?.name}</span>
      </div>
      <div className="flex gap-1 items-center">
        <Phone
          className="bg-slate-800 p-2 rounded-[6px] cursor-pointer"
          height={40}
          width={40}
        />
        <Video
          className="bg-slate-800 p-2 rounded-[6px] cursor-pointer"
          height={40}
          width={40}
        />
        <EllipsisVertical className="cursor-pointer" height={25} width={25} />
      </div>
    </div>
  );
};

export default ChatHeader;
