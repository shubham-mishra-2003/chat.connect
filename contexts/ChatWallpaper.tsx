"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ChatWallpaperContextProps {
  chatWallpaper: string;
  setchatWallpaper: (wallpaper: string) => void;
  tempWallpaper: string;
  setTempWallpaper: (tempWallpaper: string) => void;
  wallpaperDoodle: boolean | undefined;
  setWallpaperDoodle: (doodle: boolean) => void;
}

const ChatWallpaperContext = createContext<
  ChatWallpaperContextProps | undefined
>(undefined);

export const ChatWallpaperProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [chatWallpaper, setchatWallpaper] = useState<string>("bg-transparent");
  const [tempWallpaper, setTempWallpaper] = useState<string>("");
  const [wallpaperDoodle, setWallpaperDoodle] = useState(false);

  useEffect(() => {
    const storedWallpaper = localStorage.getItem("wallpaper");
    const storedDoodle = localStorage.getItem("doodle");

    if (storedWallpaper) setchatWallpaper(storedWallpaper);
    if (storedDoodle) setWallpaperDoodle(JSON.parse(storedDoodle));
  }, []);

  useEffect(() => {
    localStorage.setItem("wallpaper", chatWallpaper);
  }, [chatWallpaper]);

  useEffect(() => {
    localStorage.setItem("doodle", JSON.stringify(wallpaperDoodle));
  }, [wallpaperDoodle]);

  return (
    <ChatWallpaperContext.Provider
      value={{
        chatWallpaper,
        setchatWallpaper,
        tempWallpaper,
        setTempWallpaper,
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
