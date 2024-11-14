import type { Metadata } from "next";
import "./globals.css";
import { PageProvider } from "@/contexts/PageContext";
// import DisableRightClick from "@/components/DisableRightClick";
import { ThemeProvider } from "next-themes";
import { ChatWallpaperProvider } from "@/contexts/ChatWallpaper";
import LayoutComponent from "@/components/LayoutComponent";

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
          <ThemeProvider>
            <ChatWallpaperProvider>
              <LayoutComponent>{children}</LayoutComponent>
            </ChatWallpaperProvider>
          </ThemeProvider>
        </body>
        {/* <DisableRightClick /> */}
      </html>
    </PageProvider>
  );
}
