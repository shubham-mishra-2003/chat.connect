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
  return (
    <div className="h-full gap-2 flex flex-col overflow-y-auto p-2">
      {starred.length > 0 ? (
        <>
          <p className="text-lg text-gray-400 font-bold px-5">
            Starred Messages
          </p>
          {starred.map((favourite, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2 p-2 px-10 hover:bg-slate-800 rounded-xl cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold">{favourite.user}</span>
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
