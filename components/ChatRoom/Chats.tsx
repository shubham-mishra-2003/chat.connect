import { useChatWallpaper } from "@/contexts/ChatWallpaper";

const Chats = () => {
  const { chatWallpaper, wallpaperDoodle } = useChatWallpaper();

  return (
    <div className={`${chatWallpaper} relative h-full`}>
      {wallpaperDoodle && <div className="absolute top-0 left-0 size-full"></div>}
    </div>
  );
};

export default Chats;
