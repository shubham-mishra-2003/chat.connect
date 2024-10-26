"use client";

import { Menu } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import SidebarContent from "../constants/index";
import { usePage } from "@/contexts/PageContext";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const OptionsSidebar: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { setPage } = usePage();

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

  return (
    <div
      ref={sidebarRef}
      className="flex py-2 w-fit flex-col h-screen rounded-md bg-slate-950"
    >
      <Menu
        className="h-8 p-1 w-8 text-white m-3 mt-12 hover:bg-slate-800 rounded"
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
              className={`flex items-center cursor-default gap-5 h-10 hover:bg-slate-800 p-2 rounded-[10px] ${
                isShow ? "w-full" : "w-fit"
              }`}
            >
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
                className={`flex items-center cursor-default gap-5 h-10 hover:bg-slate-800 p-2 rounded-[10px] ${
                  isShow ? "w-full" : "w-fit"
                }`}
              >
                <item.icon height={20} width={30} />
                {isShow && item.title}
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <div className="flex gap-1 flex-col">
            {SidebarContent.slice(5, 7).map((item, index) => (
              <Popover key={index}>
                <PopoverTrigger
                  title={item.title}
                  className={`flex items-center cursor-default gap-5 h-10 hover:bg-slate-800 p-2 rounded-[10px] ${
                    isShow ? "w-full" : "w-fit"
                  }`}
                >
                  <item.icon height={20} width={30} />
                  {isShow && item.title}
                </PopoverTrigger>
                <PopoverContent>Hi</PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsSidebar;
