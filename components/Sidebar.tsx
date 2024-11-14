"use client";

import SidebarHeader from "./Sidebars/SidebarHeader";
import UserList from "./Sidebars/UserList";
import CallList from "./Sidebars/CallList";
import { usePage } from "@/contexts/PageContext";
import { Link2 } from "lucide-react";
import StatusList from "./Sidebars/StatusList";
import FavouritesList from "./Sidebars/FavouritesList";
import ArchiveList from "./Sidebars/ArchiveList";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { page } = usePage();

  const {resolvedTheme} = useTheme();

  return (
    <div className="flex flex-col h-full">
      {page == "Chats" && (
        <>
          <SidebarHeader
            heading="Chats"
            icon={true}
            placeholder="Search or start a new chat"
            showSearch={true}
          />
          <div className="divider" />
          <UserList />
        </>
      )}
      {page == "Calls" && (
        <>
          <SidebarHeader
            heading="Calls"
            icon={true}
            placeholder="Search or start a new call"
            showSearch={true}
          />
          <div className="divider" />
          <div className={`flex gap-8 cursor-pointer p-2 rounded justify-center items-center w-full ${resolvedTheme == "dark" ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-slate-300 text-slate-600'}`}>
            <Link2 />
            <div className="flex items-start flex-col">
              <p className="text-xl font-bold">Create Call Link</p>
              <p className="text-lg text-gray-500">
                Share the link for your call
              </p>
            </div>
          </div>
          <CallList />
        </>
      )}
      {page == "Status" && (
        <>
          <SidebarHeader
            heading="Status"
            icon={false}
            placeholder=""
            showSearch={false}
          />
          <div className="divider" />
          <StatusList />
        </>
      )}
      {page == "Favourites" && (
        <>
          <SidebarHeader
            heading="Favourites"
            icon={false}
            placeholder="Search starred chats"
            showSearch={true}
          />
          <div className="divider" />
          <FavouritesList />
        </>
      )}
      {page == "Archive" && (
        <>
          <SidebarHeader
            heading="Archive"
            icon={false}
            placeholder="Search archived chats"
            showSearch={true}
          />
          <div className="divider" />
          <ArchiveList />
        </>
      )}
    </div>
  );
};

export default Sidebar;
