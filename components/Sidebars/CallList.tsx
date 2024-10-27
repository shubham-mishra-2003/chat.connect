import { PhoneIncoming, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import React from "react";

const calls = [
  {
    name: "Shubham",
    callType: "audio",
    selfcaller: true,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "video",
    selfcaller: false,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "audio",
    selfcaller: true,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "video",
    selfcaller: true,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "audio",
    selfcaller: false,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "video",
    selfcaller: true,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "audio",
    selfcaller: true,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "audio",
    selfcaller: true,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  },
  {
    name: "Shubham",
    callType: "audio",
    selfcaller: true,
    profile: "/icons/userAvatar.png",
    callTime: "07:20pm"
  }
];

const CallList = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto gap-1 p-2">
      {calls.map((caller, index) => (
        <div
          key={index}
          className="flex px-2 items-center rounded-xl hover:bg-slate-800 w-full"
        >
          <div className="flex w-full gap-2 p-2 items-center">
            <Image
              src={caller.profile}
              alt={caller.name}width={20}
              height={20}
              className="h-10 w-10 rounded-full border-2 border-green-400"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold">{caller.name}</span>
              {caller.selfcaller ? (
                <div className="flex gap-2 items-center">
                  {caller.callType == "audio" ? (
                    <PhoneIncoming height={20} width={18} />
                  ) : (
                    <Image
                      src="/icons/videocallIncoming.png"
                      height={20}
                      width={20}
                      alt="video call"
                      className="invert"
                    />
                  )}
                  <span>Incoming</span>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  {caller.callType == "audio" ? (
                    <PhoneOutgoing height={20} width={18} />
                  ) : (
                    <Image
                      src="/icons/videocallOutgoing.png"
                      height={20}
                      width={20}
                      alt="video call"
                      className="invert"
                    />
                  )}
                  <span>Outgoing</span>
                </div>
              )}
            </div>
          </div>
          <span>{caller.callTime}</span>
        </div>
      ))}
    </div>
  );
};

export default CallList;
