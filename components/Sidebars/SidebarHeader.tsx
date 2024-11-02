import { Ellipsis, Pencil, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SidebarHeaderProps {
  heading: string;
  icon: boolean;
  placeholder: string;
  showSearch: boolean;
}

const SidebarHeader = ({
  heading,
  placeholder,
  icon,
  showSearch
}: SidebarHeaderProps) => {
  return (
    <div className="flex flex-col min-h-fit">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-serif font-extrabold">{heading}</h1>
        <div className="flex gap-2 items-center justify-center">
          {icon ? (
            heading == "Chats" ? (
              <>
                <Pencil />
                <Ellipsis />
              </>
            ) : (
              <PhoneCallIcon />
            )
          ) : null}
        </div>
      </div>
      <div className="px-3">
        {showSearch ? (
          <input
            type="text"
            className="h-10 outline-green-400 focus-visible:outline w-full rounded-xl focus-visible:bg-slate-900 bg-slate-800 p-2 text-lg"
            placeholder={placeholder}
          />
        ) : (
          <div className="flex px-12 items-center gap-3">
            <Image src="/icons/userAvatar.png" alt="user profile" height={20} width={45} />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-serif">My Status</span>
              <span className="text-slate-400">No Update</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarHeader;
