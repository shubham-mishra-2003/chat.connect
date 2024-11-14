import { Ellipsis, Pencil, PhoneCallIcon } from "lucide-react";
import { useTheme } from "next-themes";
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
  
  const { resolvedTheme } = useTheme();
  
  return (
    <div className={`flex flex-col min-h-fit ${resolvedTheme == "dark" ? 'text-slate-100' : 'text-slate-700'}`}>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-extrabold">{heading}</h1>
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
            className={`h-10 focus-visible:outline w-full rounded-xl p-2 text-lg outline-2 ${resolvedTheme == "dark" ? 'focus-visible:bg-slate-800 bg-slate-700 outline-green-400' : 'focus-visible:bg-[#edf6ff] bg-slate-300 outline-green-600'}`}
            placeholder={placeholder}
          />
        ) : (
          <div className="flex px-12 items-center gap-3">
            <Image
              src="/icons/userAvatar.png"
              alt="user profile"
              height={20}
              width={45}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-serif">My Status</span>
              <span className={`${resolvedTheme == "dark" ? 'text-slate-400' : 'text-slate-500'}`}>No Update</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarHeader;
