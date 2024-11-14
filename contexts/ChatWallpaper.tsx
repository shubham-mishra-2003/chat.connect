"use client";

import React, { createContext, useContext, useState } from "react";

interface ChatWallpaperContextProps {
  chatWallpaper: string;
  setchatWallpaper: (wallpaper: string) => void;
  wallpaperDoodle: boolean | undefined;
  setWallpaperDoodle: (doodle: boolean) => void;
}

const ChatWallpaperContext = createContext<
  ChatWallpaperContextProps | undefined
>(undefined);

export const ChatWallpaperProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [chatWallpaper, setchatWallpaper] = useState<string>("");
  const [wallpaperDoodle, setWallpaperDoodle] = useState(true);

  return (
    <ChatWallpaperContext.Provider
      value={{
        chatWallpaper,
        setchatWallpaper,
        wallpaperDoodle,
        setWallpaperDoodle
      }}
    >
      {children}
    </ChatWallpaperContext.Provider>
  );
};

export const useChatWallpaper = () => {
  const context = useContext(ChatWallpaperContext);
  if (!context) {
    throw new Error(
      "useChatWallpaper must be used within a ChatWallpaperProvider"
    );
  }
  return context;
};
