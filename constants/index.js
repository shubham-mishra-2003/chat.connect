import {
  MessageCircleMore,
  Phone,
  CircleFadingPlus,
  Star,
  Archive,
  Settings,
  User
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
    title: "Favourites",
    page: "Favourites"
  },
  {
    icon: Archive,
    title: "Archive",
    page: "Archive"
  },
  {
    icon: Settings,
    title: "Settings",
    page: "Settings"
  },
  {
    icon: User,
    title: "Profile",
    page: "Profile"
  }
];

export const users = [
  {
    id: 1,
    profile: "/icons/userAvatar.png",
    name: "Shubham mishra",
    lastMessage: "Hi lorem40 2djdnejdnwjdnnddnwnddjjdjcdjc c dc c dc dc  v v v v v jv",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: true
  },
  {
    id: 2,
    profile: "/icons/userAvatar.png",
    name: "Shubham mishra archived",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: true
  },
  {
    id: 3,
    profile: "/icons/userAvatar.png",
    name: "Shushant mishra archived",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: true
  },
  {
    id: 4,
    profile: "/icons/userAvatar.png",
    name: "Shivansh mishra archived",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: true
  },
  {
    id: 5,
    profile: "/icons/userAvatar.png",
    name: "Suman Pathak",
    lastMessage: "Hi",
    lastMessageTime: "02:32AM",
    unseen: "2",
    archived: false
  }
];

export default SidebarContent;
