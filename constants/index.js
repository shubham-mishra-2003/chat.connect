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

// To be removed
export const users = [
  {
    id: 1,
    profile: "/icons/avatar.jpeg",
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

// To be removed
export const messages = [
  {
    sender: 1,
    recipient: 2,
    message: "Hi",
    time: "02:32AM",
    seen: true
  },
  {
    sender: 2,
    recipient: 1,
    message: "Hello",
    time: "03:00AM",
    seen: true
  },
  {
    sender: 1,
    recipient: 2,
    message: "What's up?",
    time: "03:32AM",
    seen: true
  },
  {
    sender: 2,
    recipient: 1,
    message: "Fine...😊",
    time: "03:40AM",
    seen: true
  },
  {
    sender: 1,
    recipient: 2,
    message: "Sahi hai...🫡",
    time: "03:40AM",
    seen: false
  }
];

// To be removed
export const currentUser = {
  id: 1,
  profile: "/icons/avatar.jpeg",
  name: "Shubham mishra",
  lastMessage: "Hi",
  lastMessageTime: "02:32AM",
  archived: false,
  lastseen: "03:00pm",
  isOnline: false
};

export default SidebarContent;
