"use client";

import { Menu } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import SidebarContent from "../constants/index";
import { usePage } from "@/contexts/PageContext";
import Profile from "./Sidebars/Profile";
import { useTheme } from "next-themes";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";

const OptionsSidebar: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { page, setPage } = usePage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    };

    if (isShow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShow]);

  const { resolvedTheme } = useTheme();

  return (
    <div
      ref={sidebarRef}
      className={`flex py-2 w-fit flex-col h-screen rounded-md ${
        resolvedTheme == "dark" ? "bg-slate-900" : "bg-slate-300"
      }`}
    >
      <Menu
        className={`h-8 p-1 w-8 m-3 mt-12 rounded ${
          resolvedTheme == "dark"
            ? "hover:bg-slate-700 text-white"
            : "hover:bg-slate-100 text-black"
        }`}
        height={30}
        width={30}
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
      />
      <div className="flex gap-2 px-1 justify-between flex-col h-full max-h-full w-fit text-lg overflow-y-auto">
        <div className="flex gap-1 flex-col">
          {SidebarContent.slice(0, 3).map((item, index) => (
            <div
              title={item.title}
              onClick={() => {
                setPage(item.page);
                setIsShow(false);
              }}
              key={index}
              className={`flex items-center cursor-default gap-5 h-10 relative p-2 rounded-[10px] ${
                isShow ? "w-full" : "w-fit"
              } ${
                resolvedTheme == "dark"
                  ? `${
                      page == item.page && "bg-slate-700"
                    } hover:bg-slate-700 text-white`
                  : `${
                      page == item.page && "bg-slate-100"
                    } hover:bg-slate-100 text-slate-900`
              }`}
            >
              {page == item.page && (
                <span
                  className={`h-[70%] w-1 -mr-4 rounded-full absolute top-[6px] left-1 ${
                    resolvedTheme == "dark" ? "bg-green-400" : "bg-green-600"
                  }`}
                ></span>
              )}
              <item.icon height={20} width={30} />
              {isShow && item.title}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1 flex-col">
            {SidebarContent.slice(3, 5).map((item, index) => (
              <div
                title={item.title}
                onClick={() => {
                  setPage(item.page);
                  setIsShow(false);
                }}
                key={index}
                className={`flex items-center cursor-default gap-5 h-10 relative p-2 rounded-[10px] ${
                  isShow ? "w-full" : "w-fit"
                } ${
                  resolvedTheme == "dark"
                    ? `${
                        page == item.page && "bg-slate-700"
                      } hover:bg-slate-700 text-white`
                    : `${
                        page == item.page && "bg-slate-100"
                      } hover:bg-slate-100 text-slate-900`
                }`}
              >
                {page == item.page && (
                  <span className="h-[70%] w-1 -mr-4 bg-green-400 rounded-full absolute top-[6px] left-1"></span>
                )}
                <item.icon height={20} width={30} />
                {isShow && item.title}
              </div>
            ))}
          </div>
          <div className="divider"></div>
          {SidebarContent.slice(5).map((item, index) => (
            <Drawer key={index}>
              <DrawerTrigger
                title={item.title}
                className={`flex items-center cursor-default gap-5 h-10 relative p-2 rounded-[10px] ${
                  isShow ? "w-full" : "w-fit"
                } ${
                  resolvedTheme == "dark"
                    ? "hover:bg-slate-700 text-white"
                    : "hover:bg-slate-100 text-slate-900"
                }`}
              >
                <item.icon height={20} width={30} />
                {isShow && item.title}
              </DrawerTrigger>
              <DrawerContent className="border-none p-0 w-fit">
                <DrawerTitle hidden>Drawer</DrawerTitle>
                <Profile />
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsSidebar;
