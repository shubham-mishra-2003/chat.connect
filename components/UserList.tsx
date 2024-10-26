import Image from "next/image";
import React from "react";

const user = [
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  },
  {
    profile: "/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2"
  }
];

const UserList = () => {
  const unseen = true;

  return (
    <div className="flex flex-col gap-1 items-center overflow-y-auto h-full p-2">
      {user.map((user, index) => (
        <div
          key={index}
          className="flex items-center justify-between w-full hover:bg-slate-800 rounded-xl p-2 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Image
              src={user.profile}
              alt={user.name}
              width={20}
              height={20}
              className="h-10 w-10 rounded-full border-2 border-green-500"
            />
            <div className="w-full flex flex-col">
              <span className="text-xl font-bold">{user.name}</span>
              <div className="flex gap-3 items-center">
                <span className="text-gray-500 text-lg">
                  {user.lastMessage}
                </span>
                <span className="text-gray-500 text-sm">
                  {user.lastMessageTime}
                </span>
              </div>
            </div>
          </div>
          {unseen && (
            <span className="bg-green-600 font-bold text-lg h-5 w-5 flex justify-center items-center rounded-full">
              {user.unseen}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
