import type { Metadata } from "next";
import "./globals.css";
import OptionsSidebar from "../components/OptionsSidebar";
import Image from "next/image";
import Sidebar from "@/components/Sidebars/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable";
import { PageProvider } from "@/contexts/PageContext";

export const metadata: Metadata = {
  title: "ChatAPP | Shubham mishra",
  description: "Chat Application with audio and video calls"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body className="h-screen bg-gray-900 text-slate-200">
          <div className="size-full flex">
            <div className="fixed top-0 left-0 z-50">
              <h1 className="fixed z-10 top-0 w-full h-[54px] flex items-center px-3 bg-slate-950 text-green-400 font-bold font-serif gap-2 text-xl">
                <Image src="/icons/Logo.png" alt="Logo" height={20} width={30} />
                ChatAPP | Shubham mishra
              </h1>
              <OptionsSidebar />
            </div>
            <div
              className="mt-[54px] ml-[54px] flex w-full"
              style={{ maxHeight: "calc(100vh - 44px)" }}
            >
              <ResizablePanelGroup direction="horizontal" className="h-full">
                <ResizablePanel
                  minSize={25}
                  maxSize={35}
                  className="border-r-2 border-slate-700 h-full"
                >
                  <Sidebar />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>{children}</ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>
        </body>
      </html>
    </PageProvider>
  );
}
