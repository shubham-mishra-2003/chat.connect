"use client";

import Sidebar from "@/components/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable";
import React, { useEffect, useState } from "react";
import OptionsSidebar from "./OptionsSidebar";
import { ChatProvider } from "@/contexts/ChatContext";
import { useTheme } from "next-themes";
import { MessagesSquare } from "lucide-react";

const LayoutComponent = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(30);

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== "undefined") {
      const savedWidth = parseInt(
        localStorage.getItem("sidebarWidth") || "30",
        10
      );
      setSidebarWidth(savedWidth);
    }
  }, []);

  const handleResize = (newWidth: number) => {
    setSidebarWidth(newWidth);
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarWidth", newWidth.toString());
    }
  };

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setLoading(false);
  }, []);

  if (!hydrated) return null;

  return (
    <div
      className={`size-full flex ${
        resolvedTheme == "dark" ? "bg-slate-800" : "bg-[#edf6ff]"
      }`}
    >
      <div
        className={`fixed top-0 left-0 z-50 ${
          resolvedTheme == "dark" ? "bg-slate-800" : "bg-[#edf6ff]"
        }`}
      >
        {loading ? (
          <div className="fixed flex gap-2 z-10 top-0 w-full h-[54px] p-2">
            <div className="w-12 bg-slate-500 animate-pulse h-full rounded-lg"></div>
            <div className="w-40 bg-slate-500 animate-pulse h-full rounded-lg"></div>
          </div>
        ) : (
          <h1
            className={`fixed z-10 top-0 w-full h-[54px] flex items-center px-4 font-bold gap-2 text-xl ${
              resolvedTheme == "dark"
                ? "bg-slate-900 dark-green"
                : "bg-slate-300 light-green"
            }`}
          >
            <MessagesSquare />
            ChatAPP | Shubham mishra
          </h1>
        )}
        {loading ? (
          <div className="h-screen flex flex-col justify-between gap-2 w-12">
            <div className="mt-[54px] flex flex-col gap-2 p-2">
              <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
              <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
              <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
              <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
              <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
              <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ) : (
          <OptionsSidebar />
        )}
      </div>
      {loading ? (
        <div
          className="mt-[54px] ml-[54px] flex w-full"
          style={{ maxHeight: "calc(100vh - 44px)" }}
        >
          <div className="flex flex-col p-5 gap-3 flex-1">
            <div className="flex justify-between w-full">
              <div className="bg-slate-500 h-10 w-20 rounded-lg animate-pulse"></div>
              <div className="flex gap-1">
                <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
                <div className="bg-slate-500 h-10 w-10 rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="bg-slate-500 animate-pulse rounded-lg h-12 w-full"></div>
            <div className="flex flex-col mt-2 overflow-auto gap-1">
              <div className="bg-slate-500 animate-pulse rounded-lg h-20 w-full"></div>
              <div className="bg-slate-500 animate-pulse rounded-lg h-20 w-full"></div>
              <div className="bg-slate-500 animate-pulse rounded-lg h-20 w-full"></div>
              <div className="bg-slate-500 animate-pulse rounded-lg h-20 w-full"></div>
              <div className="bg-slate-500 animate-pulse rounded-lg h-20 w-full"></div>
            </div>
          </div>
          <div className="flex flex-[2] items-center justify-center flex-col gap-2">
            <div className="h-36 w-36 bg-slate-500 animate-pulse rounded-lg"></div>
            <div className="h-14 w-96 bg-slate-500 animate-pulse rounded-lg"></div>
            <div className="h-16 w-[480px] bg-slate-500 animate-pulse rounded-lg"></div>
          </div>
        </div>
      ) : (
        <div
          className="mt-[54px] ml-[54px] flex w-full"
          style={{ maxHeight: "calc(100vh - 44px)" }}
        >
          <ChatProvider>
            <ResizablePanelGroup direction="horizontal" className="h-full">
              <ResizablePanel
                defaultSize={sidebarWidth}
                minSize={25}
                maxSize={45}
                className={`border-r-2 h-full ${
                  resolvedTheme == "dark"
                    ? "border-slate-700"
                    : "border-slate-300"
                }`}
                onResize={handleResize}
              >
                <Sidebar />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>{children}</ResizablePanel>
            </ResizablePanelGroup>
          </ChatProvider>
        </div>
      )}
    </div>
  );
};

export default LayoutComponent;
