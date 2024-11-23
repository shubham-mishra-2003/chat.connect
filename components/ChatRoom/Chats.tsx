import { currentUser, messages, users } from "@/constants";
import { useChatWallpaper } from "@/contexts/ChatWallpaper";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

const Chats = () => {
  const { tempWallpaper, chatWallpaper, wallpaperDoodle } = useChatWallpaper();

  return (
    <div
      className={`${
        tempWallpaper || chatWallpaper
      } relative size-full overflow-y-auto`}
    >
      {wallpaperDoodle && (
        <div className="absolute top-0 left-0 flex justify-center items-center size-full z-0 opacity-50 pointer-events-none">
          <Image
            src="/icons/doodle.png"
            alt="doodle"
            width={100}
            height={100}
            className="size-full"
          />
        </div>
      )}
      <div className="p-4 bg-transparent size-full overflow-y-auto z-10">
        {messages.length === 0 ? (
          <NoMessage />
        ) : (
          messages.map((message, index) => {
            const sender = users.find((user) => user.id === message.sender);
            const recipient = users.find(
              (user) => user.id === message.recipient
            );

            if (!sender || !recipient) {
              return null;
            }

            return (
              <div key={index}>
                {message.sender === currentUser.id ? (
                  <div className="chat chat-end">
                    <div className="chat-bubble bg-green-500 text-black">
                      {message.message}
                    </div>
                    <div className="chat-footer flex items-center gap-1 text-slate-500">
                      {message.time}
                      <CheckCheck
                        height={20}
                        width={20}
                        className={
                          message.seen ? "text-blue-500" : "text-slate-500"
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <Image
                          alt="User Avatar"
                          src={recipient.profile}
                          height={40}
                          width={40}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div className="chat-header text-slate-500">
                      {recipient.name}
                    </div>
                    <div className="chat-bubble bg-slate-700 text-white">
                      {message.message}
                    </div>
                    <div className="chat-footer text-slate-500">
                      {message.time}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Chats;

const NoMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-slate-700 p-2 rounded-xl text-green-500 dark:text-green-400 gap-2">
      <h1>
        Messages in this chat are secured with peer-to-peer encryption. No one
        outside this chat can read your messages.
      </h1>
      <h2>Send a message to start the conversation</h2>
    </div>
  );
};
