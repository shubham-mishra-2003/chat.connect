"use client";

import SidebarHeader from "./SidebarHeader";
import UserList from "./UserList";
import CallList from "./CallList";
import { usePage } from "@/contexts/PageContext";

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
          <CallList />
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
          <CallList />
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
          <CallList />
        </>
      )}
    </div>
  );
};

export default Sidebar;
