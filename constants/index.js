import {
  MessageCircleMore,
  Phone,
  CircleFadingPlus,
  Star,
  Archive,
  User,
  Brush,
  CircleHelp,
  User2
} from "lucide-react";

const SidebarContent = [
  {
    icon: MessageCircleMore,
    title: "Chats",
    page: "Chats"
  },
  {
    icon: Phone,
    title: "Calls",
    page: "Calls"
  },
  {
    icon: CircleFadingPlus,
    title: "Status",
    page: "Status"
  },
  {
    icon: Star,
    title: "Starred messages",
    page: "Favourites"
  },
  {
    icon: Archive,
    title: "Archives",
    page: "Archive"
  },
  {
    icon: User,
    title: "Profile",
    page: "Profile"
  }
];

export const modalSidebar = [
  {
    icon: MessageCircleMore,
    title: "Chats",
    page: "chats"
  },
  {
    icon: Brush,
    title: "Personalization",
    page: "personalization"
  },
  {
    icon: CircleHelp,
    title: "Help",
    page: "help"
  },
  {
    icon: User2,
    title: "Profile",
    page: "profile"
  }
];

export const ChatBackgrounds = [
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
  "bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 dark:from-red-500 dark:via-yellow-500 dark:to-green-500 bg-[length:200%_200%] animate-gradient"
];

export const users = [
  {
    id: 1,
    profile: "/icons/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "",
    archived: false,
    lastseen: "03:00pm",
    isOnline: true
  },
  {
    id: 2,
    profile: "/icons/userAvatar.png",
    name: "Shubham mishra archived",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: true,
    lastseen: "04:03AM",
    isOnline: true
  },
  {
    id: 3,
    profile: "/icons/userAvatar.png",
    name: "Shushant mishra archived",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: true,
    lastseen: "09:20PM",
    isOnline: true
  },
  {
    id: 4,
    profile: "/icons/userAvatar.png",
    name: "Shivansh mishra archived",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: true,
    lastseen: "04:29AM",
    isOnline: true
  }
];

export default SidebarContent;
