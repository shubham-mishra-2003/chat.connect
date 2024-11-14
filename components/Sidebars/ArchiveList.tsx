import { users } from "@/constants";
import { useChat } from "@/contexts/ChatContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const ArchiveList = () => {
  const { setChatId } = useChat();

  const Users = users.filter((user) => user.archived);

  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col gap-1 items-center overflow-y-auto h-full p-2 overflow-hidden">
      {Users.length > 0 ? (
        Users.map((user, index) => (
          <div
            key={index}
            onClick={() => {
              setChatId(user.id);
            }}
            onContextMenu={() => alert(`Hello ${user.name}`)} // Double click options
            className={`flex items-center gap-3 justify-between w-full rounded-xl p-2 px-3 cursor-pointer ${
              resolvedTheme == "dark"
                ? "hover:bg-slate-700 text-slate-300"
                : "hover:bg-slate-300 text-slate-600"
            }`}
          >
            <div className="flex items-center gap-3 w-full">
              <Image
                src={user.profile}
                alt={user.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-green-400"
              />
              <div className="w-full flex overflow-hidden flex-col">
                <div className="flex justify-between w-full gap-2">
                  <span className="text-xl font-bold truncate">
                    {user.name}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {user.lastMessageTime}
                  </span>
                </div>
                <div className="flex items-center w-full justify-between gap-2">
                  <span className="text-gray-500 text-lg w-[80px] truncate">
                    {user.lastMessage}
                  </span>
                  {user.unseen && (
                    <span className="bg-green-400 text-slate-800 font-bold text-lg h-5 w-5 flex justify-center items-center rounded-full">
                      {user.unseen}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center font-bold text-xl text-gray-400">
          No archived chats
        </div>
      )}
    </div>
  );
};

export default ArchiveList;
