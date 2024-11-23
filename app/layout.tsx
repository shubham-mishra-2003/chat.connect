import type { Metadata } from "next";
import "./globals.css";
import { PageProvider } from "@/contexts/PageContext";
import { ThemeProvider } from "next-themes";
import { ChatWallpaperProvider } from "@/contexts/ChatWallpaper";
import LayoutComponent from "@/components/LayoutComponent";
import { Toaster } from "react-hot-toast";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "ChatAPP | Shubham Mishra",
  description: "Chat Application with audio and video calls"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className="h-screen dark:bg-slate-800 bg-[#edf6ff]">
          <ThemeProvider attribute="class">
            <PageProvider>
              <Toaster position="top-right" />
              <SignedOut>
                <Home />
              </SignedOut>
              <SignedIn>
                <ChatWallpaperProvider>
                  <LayoutComponent>{children}</LayoutComponent>
                </ChatWallpaperProvider>
              </SignedIn>
            </PageProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
