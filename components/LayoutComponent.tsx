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
  const [loading, setLoading] = useState(true);

  const [sidebarWidth, setSidebarWidth] = useState(() => {
    return parseInt(localStorage.getItem("sidebarWidth") || "30", 10);
  });

  const handleResize = (newWidth: number) => {
    setSidebarWidth(newWidth);
    localStorage.setItem("sidebarWidth", newWidth.toString());
  };

  useEffect(() => {
    const savedWidth = parseInt(
      localStorage.getItem("sidebarWidth") || "30",
      10
    );
    if (savedWidth) {
      setSidebarWidth(savedWidth);
    }
  }, []);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="flex size-full absolute top-0 left-0 justify-center items-center text-slate-500 text-4xl font-bold z-10">
        Loading...
      </div>
    );

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
        <OptionsSidebar />
      </div>
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
    </div>
  );
};

export default LayoutComponent;
