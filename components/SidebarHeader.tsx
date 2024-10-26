import { Ellipsis, Pencil, PhoneCallIcon } from "lucide-react";
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
    <div>
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
        {showSearch && (
          <input
            type="text"
            className="h-10 outline-green-400 focus-visible:outline w-full rounded-xl focus-visible:bg-slate-900 bg-slate-800 p-2 text-lg"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

export default SidebarHeader;