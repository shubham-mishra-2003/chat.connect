import { ChatBackgrounds, modalSidebar } from "@/constants";
import React, { useState } from "react";
import ModeSwitch from "../ModeSwitch";
import { useChatWallpaper } from "@/contexts/ChatWallpaper";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";

const Modal = () => {
  const [page, setPage] = useState("profile");

  const { setchatWallpaper, wallpaperDoodle, setWallpaperDoodle } =
    useChatWallpaper();

  const handleCheckboxChange = () => {
    setWallpaperDoodle(!wallpaperDoodle);
  };

  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`py-2 h-[480px] w-[500px] rounded-xl ${
        resolvedTheme == "dark" ? "bg-slate-900" : "bg-slate-300"
      }`}
    >
      <div className="flex gap-3 h-full">
        <div className="flex flex-col gap-3 justify-center h-full min-w-fit px-2">
          {modalSidebar.map((nav, index) => (
            <div
              key={index}
              onClick={() => setPage(nav.page)}
              className={`flex items-center cursor-pointer gap-5 relative p-3 rounded-[10px] font-bold ${
                resolvedTheme == "dark"
                  ? "bg-slate-700 text-slate-300"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {page == nav.page && (
                <span
                  className={`h-[70%] w-1 -mr-4 rounded-full absolute top-[6px] left-1 ${
                    resolvedTheme == "dark" ? "bg-green-400" : "bg-green-600"
                  }`}
                ></span>
              )}
              <nav.icon />
              <span className="whitespace-nowrap">{nav.title}</span>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full overflow-y-auto pr-4 py-4">
          {page == "chats" && (
            <div className="flex flex-col gap-5">
              <h1
                className={`text-4xl font-bold ${
                  resolvedTheme == "dark" ? "text-slate-300" : "text-gray-600"
                }`}
              >
                Chats
              </h1>
              <div className="flex flex-col gap-2">
                <button
                  className={`whitespace-nowrap w-fit p-2 rounded-[10px] border-[2px] ${
                    resolvedTheme == "dark"
                      ? "border-green-400 bg-slate-700 text-slate-300"
                      : "border-green-600 bg-slate-200 text-slate-600"
                  }`}
                >
                  Archive all chats
                </button>
                <span className="text-md text-gray-500">
                  You will still recieve messages from archived chats, but
                  notifications will be muted
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className={`whitespace-nowrap w-fit p-2 rounded-[10px] border-[2px] ${
                    resolvedTheme == "dark"
                      ? "border-green-400 bg-slate-700 text-slate-300"
                      : "border-green-600 bg-slate-200 text-slate-600"
                  }`}
                >
                  Clear all messages
                </button>
                <span className="text-md text-gray-500">
                  Delete all messages from chats and groups.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className={`whitespace-nowrap w-fit p-2 rounded-[10px] border-[2px] ${
                    resolvedTheme == "dark"
                      ? "border-green-400 bg-slate-700 text-slate-300"
                      : "border-green-600 bg-slate-200 text-slate-600"
                  }`}
                >
                  Delete all chats
                </button>
                <span className="text-md text-gray-500">
                  Delete all the messages and clear chat history.
                </span>
              </div>
            </div>
          )}
          {page == "personalization" && (
            <div className="flex flex-col gap-5">
              <h1
                className={`text-4xl font-bold ${
                  resolvedTheme == "dark" ? "text-slate-300" : "text-gray-600"
                }`}
              >
                Personalization
              </h1>
              <div className="flex flex-col gap-2">
                <ModeSwitch />
                <span
                  className={`text-xl font-semibold mt-3 ${
                    resolvedTheme == "dark"
                      ? "text-slate-300 "
                      : "text-slate-600"
                  }`}
                >
                  Chat wallpaper
                </span>
                <div className="flex justify-between flex-wrap gap-2 mt-1">
                  {ChatBackgrounds.map((wallpaper, index) => (
                    <div
                      key={index}
                      className={`h-12 w-12 cursor-pointer rounded-[8px] shadow shadow-gray-500 hover:border-2 ${wallpaper}`}
                      onClick={() => setchatWallpaper(wallpaper)}
                    ></div>
                  ))}
                </div>
                <label
                  htmlFor="doodle"
                  className={`flex mt-4 items-center cursor-pointer w-fit gap-2 text-xl font-semibold ${
                    resolvedTheme == "dark"
                      ? "text-slate-300"
                      : "text-slate-700"
                  } `}
                >
                  <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    className="hidden"
                    id="doodle"
                    checked
                  />
                  <span
                    className={`bg-transparent flex items-center justify-center h-5 w-5 rounded-md border-white border-2 ${
                      wallpaperDoodle && resolvedTheme == "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {wallpaperDoodle && <Check />}
                  </span>
                  Doodle
                </label>

                <button
                  className={`whitespace-nowrap mt-2 w-32 p-2 rounded-[10px] border-[2px] ${
                    resolvedTheme == "dark"
                      ? "border-green-400 bg-slate-700 text-slate-300"
                      : "border-green-600 bg-slate-200 text-slate-600"
                  }`}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
          {page == "help" && (
            <div className="flex flex-col gap-5">
              <h1
                className={`text-4xl font-bold ${
                  resolvedTheme == "dark" ? "text-slate-300" : "text-gray-600"
                }`}
              >
                Help
              </h1>
            </div>
          )}
          {page == "profile" && (
            <div className="flex flex-col gap-5">
              <h1
                className={`text-4xl font-bold ${
                  resolvedTheme == "dark" ? "text-slate-300" : "text-gray-600"
                }`}
              >
                Profile
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
