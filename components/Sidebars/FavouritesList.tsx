import { useTheme } from "next-themes";
import React from "react";

const starred = [
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  },
  {
    user: "Shubham",
    message: "Hello",
    messageTime: "07:30 PM"
  }
];

const FavouritesList = () => {

  const {resolvedTheme} = useTheme()

  return (
    <div className="h-full gap-2 flex flex-col overflow-y-auto p-2">
      {starred.length > 0 ? (
        <>
          <p className={`text-lg font-bold px-5 ${resolvedTheme == "dark" ? 'text-gray-400' : 'text-gray-500'}`}>
            Starred Messages
          </p>
          {starred.map((favourite, index) => (
            <div
              key={index}
              className={`flex justify-between items-center gap-2 p-2 px-5 rounded-xl cursor-pointer ${resolvedTheme == "dark" ? 'hover:bg-slate-700' : 'hover:bg-slate-300'}`}
            >
              <div className="flex flex-col">
                <span className={`text-xl font-bold ${resolvedTheme == "dark" ? 'text-gray-300' : 'text-gray-600'}`}>{favourite.user}</span>
                <span className="text-lg text-gray-400">
                  {favourite.message}
                </span>
              </div>
              <span className="text-gray-400">{favourite.messageTime}</span>
            </div>
          ))}
        </>
      ) : (
        <div className="flex justify-center p-2 text-gray-400 font-bold text-xl">
          No Starred Messages
        </div>
      )}
    </div>
  );
};

export default FavouritesList;
