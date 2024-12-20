import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const status = [
  {
    name: "Shubham",
    profile: "/icons/userAvatar.png",
    day: "Yesterday",
    time: "07:30PM"
  },
  {
    name: "Shubham",
    profile: "/icons/userAvatar.png",
    day: "Yesterday",
    time: "07:30PM"
  },
  {
    name: "Shubham",
    profile: "/icons/userAvatar.png",
    day: "Yesterday",
    time: "07:30PM"
  },
  {
    name: "Shubham",
    profile: "/icons/userAvatar.png",
    day: "Yesterday",
    time: "07:30PM"
  },
  {
    name: "Shubham",
    profile: "/icons/userAvatar.png",
    day: "Yesterday",
    time: "07:30PM"
  },
  {
    name: "Shubham",
    profile: "/icons/userAvatar.png",
    day: "Yesterday",
    time: "07:30PM"
  }
];

const StatusList = () => {
  const {resolvedTheme} = useTheme();
  return (
    <div className="flex flex-col overflow-y-auto h-full p-2">
      <span className={`text-md font-bold px-3 pb-1 ${resolvedTheme == "dark" ? 'text-gray-300' : 'text-gray-600'}`}>Viewed updates</span>
      <div className="flex flex-col gap-1">
        {status.map((status, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 w-full rounded-xl p-2 cursor-pointer ${resolvedTheme == "dark" ? 'hover:bg-slate-700 text-gray-300' : 'hover:bg-slate-300 text-gray-600'}`}
          >
            <Image
              src={status.profile}
              alt={status.name}
              width={20}
              height={20}
              className="h-10 w-10 rounded-full border-2 border-green-400"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold">{status.name}</span>
              <div className="flex gap-2 items-center text-slate-400">
                <span className="text-md">{status.day}</span>
                <span className="text-sm">{status.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusList;
