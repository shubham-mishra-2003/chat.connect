"use client";

import SidebarHeader from "./SidebarHeader";
import UserList from "./UserList";
import CallList from "./CallList";
import { usePage } from "@/contexts/PageContext";
import { Link2 } from "lucide-react";
import StatusList from "./StatusList";
import FavouritesList from "./FavouritesList";
import ArchiveList from "./ArchiveList";

const Sidebar = () => {
  const { page } = usePage();

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
          <div className="flex gap-8 cursor-pointer p-2 hover:bg-slate-800 rounded justify-center items-center w-full">
            <Link2 />
            <div className="flex items-start flex-col">
              <p className="text-xl font-bold">Create Call Link</p>
              <p className="text-lg text-gray-400">
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
