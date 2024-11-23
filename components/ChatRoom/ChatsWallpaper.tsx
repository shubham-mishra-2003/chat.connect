import { useChatWallpaper } from "@/contexts/ChatWallpaper";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

const ChatsWallpaper = () => {
  const ChatBackgrounds = [
    "bg-slate-900",
    "bg-slate-200",
    "bg-gradient-to-tr to-purple-300 from-blue-300",
    "bg-gradient-to-tr to-blue-500 from-purple-500",
    "bg-gradient-to-br to-yellow-100 from-orange-400",
    "bg-gradient-to-br to-lime-400 from-emerald-500",
    "bg-gradient-to-bl from-red-500 to-amber-600",
    "bg-gradient-to-tl to-teal-500 from-cyan-500",
    "bg-gradient-to-tr from-sky-800 to-indigo-500",
    "bg-gradient-to-tr from-pink-400 to-purple-400",
    "bg-gradient-to-b to-violet-700 from-cyan-300",
    "bg-gradient-to-br to-cyan-400 from-teal-500",
    "bg-gradient-to-r from-blue-200 via-purple-300 to-purple-400",
    "bg-gradient-to-tr from-orange-200 via-red-300 to-red-400",
    "bg-gradient-to-bl from-teal-200 via-green-300 to-green-400",
    "bg-gradient-to-r from-pink-200 via-pink-300 to-rose-300",
    "bg-gradient-to-r from-purple-200 via-indigo-300",
    "bg-gradient-to-r from-blue-200 via-cyan-200 to-violet-200 dark:from-blue-500 dark:via-cyan-500 dark:to-violet-500 bg-[length:200%_200%] animate-gradient"
  ];

  const {
    chatWallpaper,
    setchatWallpaper,
    setTempWallpaper,
    wallpaperDoodle,
    setWallpaperDoodle
  } = useChatWallpaper();

  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col justify-between flex-wrap gap-2 mt-1 p-1">
      <div className="flex flex-wrap gap-2">
        {ChatBackgrounds.map((wallpaper, index) => (
          <div
            key={index}
            className={`h-[45px] hover:scale-110 w-[45px] cursor-pointer rounded-[8px] shadow shadow-gray-500 hover:border-2 ${wallpaper}`}
            onClick={() => {
              const saveWallpaper = new Promise((resolve, reject) => {
                try {
                  setTimeout(() => {
                    setchatWallpaper(wallpaper);
                    resolve(wallpaper);
                  }, 800);
                } catch (error) {
                  reject(error);
                }
              });
              toast.promise(saveWallpaper, {
                loading: "Saving...",
                success: "Wallpaper saved...",
                error: "Couldn't save wallpaper!"
              });
            }}
            onMouseEnter={() => setTempWallpaper(wallpaper)}
            onMouseLeave={() => setTempWallpaper(chatWallpaper)} // Ensure hover effect is working correctly
          ></div>
        ))}
      </div>

      <label className="flex mt-4 items-center cursor-pointer w-fit gap-2 text-xl font-semibold dark:text-slate-300 text-slate-700">
        <input
          type="checkbox"
          onChange={() => setWallpaperDoodle(!wallpaperDoodle)}
          className="hidden"
          checked={wallpaperDoodle}
        />
        <span
          className={`flex items-center justify-center h-5 w-5 rounded-md dark:border-slate-300 border-slate-700 border-2 ${
            wallpaperDoodle ? "dark:bg-slate-300 bg-slate-700" : ""
          }`}
        >
          {wallpaperDoodle && <Check className="dark:text-black text-white" />}
        </span>
        Doodle
      </label>

      <button
        className={`whitespace-nowrap mt-2 w-32 p-2 rounded-[10px] border-[2px] ${
          resolvedTheme === "dark"
            ? "border-green-400 bg-slate-700 text-slate-300"
            : "border-green-600 bg-slate-200 text-slate-600"
        }`}
        onClick={() => {
          setchatWallpaper("bg-transparent");
          setWallpaperDoodle(false);
          setTempWallpaper("bg-transparent");
          toast.success("Reset successful");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ChatsWallpaper;
