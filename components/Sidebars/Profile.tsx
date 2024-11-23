import { modalSidebar } from "@/constants";
import React, { useEffect, useState } from "react";
import ModeSwitch from "../ModeSwitch";
import { useTheme } from "next-themes";
import ChatsWallpaper from "../ChatRoom/ChatsWallpaper";
import { SignOutButton, useUser } from "@clerk/nextjs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";
import toast from "react-hot-toast";
import Image from "next/image";
import { Check, Edit, Pen, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Command, CommandList, CommandGroup, CommandItem } from "../ui/command";
import ContactandRate from "../ContactandRate";

const ImageOptions = [
  {
    command: "",
    title: "Remove image"
  },
  {
    command: "",
    title: "View image"
  },
  {
    command: "",
    title: "Change image"
  }
];

const Profile = () => {
  const [page, setPage] = useState("profile");
  const { resolvedTheme } = useTheme();
  const { user, isSignedIn } = useUser();
  const [loggedOut, setLoggedOut] = useState(true);
  const [changeName, setChangeName] = useState({
    fullname: `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim(),
    username: user?.username ?? ""
  });

  const [edit, setEdit] = useState({
    name: false,
    about: false,
    username: false
  });

  const aboutmsg =
    "लगाव ही पीढ़ा है, करुणा ही क्रूरता है और अंत ही प्रारंभ है ।";

  const [about, setAbout] = useState(aboutmsg);

  useEffect(() => {
    if (isSignedIn) setLoggedOut(false);
  }, [isSignedIn]);

  const handleNameChange = async () => {
    if (!user) {
      toast.error("No user available for update.");
      return;
    }

    const fullName = changeName.fullname.trim();
    if (!fullName || !fullName.includes(" ")) {
      toast.error("Please enter both first and last name.");
      return;
    }

    const [firstName, ...rest] = fullName.split(" ");
    const lastName = rest.join(" ");

    try {
      await user.update({
        firstName: firstName || "",
        lastName: lastName || ""
      });
      toast.success("User name updated.");
      setEdit((prevEdit) => ({
        ...prevEdit,
        name: false
      }));
    } catch (error) {
      toast.error(`Error updating name: ${error}`);
    }
  };

  if (!user) {
    return (
      <div className="h-[480px] w-[500px] dark:bg-slate-900 bg-slate-300 flex justify-center items-center dark:text-white text-slate-950 text-2xl">
        Loading...
      </div>
    );
  }

  const ModalHeader = ({ heading }: { heading: string }) => {
    return (
      <h1 className="text-4xl font-bold dark:text-slate-300 text-gray-600">
        {heading}
      </h1>
    );
  };

  return (
    <div className="py-2 h-[480px] w-[500px] rounded-xl dark:bg-slate-900 bg-slate-300 text-slate-600 dark:text-slate-300">
      <div className="flex gap-3 h-full">
        <div className="flex flex-col gap-3 justify-center h-full min-w-fit px-2">
          {modalSidebar.map((nav, index) => (
            <div
              key={index}
              onClick={() => setPage(nav.page)}
              className="flex items-center cursor-pointer gap-5 relative p-3 rounded-[10px] font-bold dark:bg-slate-700 dark:text-slate-300 bg-slate-200 text-slate-600"
            >
              {page == nav.page && (
                <span className="h-[70%] w-1 -mr-4 rounded-full absolute top-[6px] left-1 dark:bg-green-400 bg-green-600"></span>
              )}
              <nav.icon />
              <span className="whitespace-nowrap">{nav.title}</span>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full overflow-y-auto pr-4 py-4">
          {page == "chats" && (
            <div className="flex flex-col gap-5">
              <ModalHeader heading="Chats" />
              <div className="flex flex-col gap-2">
                <button className="whitespace-nowrap w-fit p-2 rounded-[10px] border-[2px] dark:border-green-400 dark:bg-slate-700 dark:text-slate-300 border-green-600 bg-slate-200 text-slate-600">
                  Archive all chats
                </button>
                <span className="text-md text-gray-500">
                  You will still recieve messages from archived chats, but
                  notifications will be muted
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <button className="whitespace-nowrap w-fit p-2 rounded-[10px] border-[2px] dark:border-green-400 dark:bg-slate-700 dark:text-slate-300 border-green-600 bg-slate-200 text-slate-600">
                  Clear all messages
                </button>
                <span className="text-md text-gray-500">
                  Delete all messages from chats and groups.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <button className="whitespace-nowrap w-fit p-2 rounded-[10px] border-[2px] dark:border-green-400 dark:bg-slate-700 dark:text-slate-300 border-green-600 bg-slate-200 text-slate-600">
                  Delete all chats
                </button>
                <span className="text-md text-gray-500">
                  Delete all the messages and clear chat history.
                </span>
              </div>
            </div>
          )}
          {page == "personalization" && (
            <div className="flex flex-col gap-5">
              <ModalHeader heading="Personalization" />
              <div className="flex flex-col gap-2">
                <ModeSwitch />
                <span
                  className={`text-xl font-semibold mt-3 ${
                    resolvedTheme == "dark"
                      ? "text-slate-300 "
                      : "text-slate-600"
                  }`}
                >
                  Chat wallpaper
                </span>
                <ChatsWallpaper />
              </div>
            </div>
          )}
          {page == "help" && (
            <div className="flex flex-col w-full gap-5">
              <ModalHeader heading="Help" />
              <div className="flex flex-col">
                <h1 className="text-2xl">Chat from connect</h1>
                <div className="h-[1px] my-2 w-full bg-slate-500 rounded-xl"></div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl">Contact Us</h1>
                <span className="">
                  We&apos;d love to hear from you, about our application.
                </span>
                <ContactandRate formType="contact" />
                <ContactandRate formType="feedback" />
              </div>
              <div className="h-full justify-center items-end flex">
                &copy; 2024 All rights reserved by connect
              </div>
            </div>
          )}
          {page == "profile" && (
            <div className="flex w-full flex-col gap-5">
              <ModalHeader heading="Profile" />
              <div className="flex w-full justify-center items-center">
                <Popover>
                  <PopoverTrigger className="w-fit group border-2 border-green-500 rounded-full relative">
                    <Image
                      src="/icons/userAvatar.png"
                      alt=""
                      height={100}
                      width={100}
                      className="group rounded-full p-0"
                    />
                    <div className="flex size-full dark:bg-opacity-75 bg-opacity-30 bg-slate-900 justify-center items-center rounded-full p-0 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
                      <Edit className="text-white" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="dark:bg-slate-800 bg-slate-200 w-32 p-0">
                    <Command className="bg-transparent">
                      <CommandList>
                        <CommandGroup>
                          {ImageOptions.map((options, index) => (
                            <CommandItem
                              key={index}
                              onClick={() => options.command}
                              className="bg-transparent dark:text-white text-slate-800 rounded"
                            >
                              {options.title}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col gap-4 w-full dark:text-slate-200 text-slate-700 text-2xl">
                {edit.name ? (
                  <div className="flex w-full group dark:focus-within:bg-slate-950 focus-within:bg-slate-200 placeholder:text-slate-500 text-slate-900 dark:text-slate-100 focus-within:border-b-green-400 rounded px-1 border-b-[2px] border-[1px] justify-center items-center gap-1">
                    <input
                      type="text"
                      placeholder="change name"
                      className="bg-transparent group w-full"
                      autoFocus={true}
                      value={changeName.fullname}
                      onChange={(e) => {
                        setChangeName((prev) => ({
                          ...prev,
                          fullname: e.target.value
                        }));
                      }}
                    />
                    <div className="flex items-center justify-center gap-1">
                      <Check
                        className="cursor-pointer text-green-500 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                        height={30}
                        width={30}
                        onClick={handleNameChange}
                      />
                      <X
                        className="cursor-pointer text-red-500 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                        height={30}
                        width={30}
                        onClick={() => {
                          setEdit((prevEdit) => ({
                            ...prevEdit,
                            name: false
                          }));
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full justify-between">
                    {user?.fullName}
                    <Pen
                      height={30}
                      width={30}
                      className="cursor-pointer p-1 h-[30px] w-[30px] rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                      onClick={() =>
                        setEdit((prevEdit) => ({
                          ...prevEdit,
                          name: true
                        }))
                      }
                    />
                  </div>
                )}
                <div className="flex flex-col w-full">
                  <h2 className="text-lg dark:text-slate-200 text-slate-900">
                    About
                  </h2>
                  {edit.about ? (
                    <div className="flex w-full group dark:focus-within:bg-slate-950 focus-within:bg-slate-200 placeholder:text-slate-500 text-slate-900 dark:text-slate-100 focus-within:border-b-green-400 rounded px-1 border-b-[2px] border-[1px] justify-center items-center gap-1">
                      <textarea
                        placeholder="change about"
                        className="bg-transparent resize-none text-sm group w-full"
                        autoFocus={true}
                        value={about}
                        onChange={(e) => {
                          setAbout(e.target.value);
                        }}
                      />
                      <div className="flex items-center justify-center gap-1">
                        <Check
                          className="cursor-pointer text-green-500 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                          height={30}
                          width={30}
                          onClick={() => {
                            setEdit((prevEdit) => ({
                              ...prevEdit,
                              about: false
                            }));
                          }}
                        />
                        <X
                          className="cursor-pointer text-red-500 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                          height={30}
                          width={30}
                          onClick={() => {
                            setEdit((prevEdit) => ({
                              ...prevEdit,
                              about: false
                            }));
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full justify-between items-center gap-2">
                      <span className="text-sm dark:text-slate-300 text-slate-600">
                        {about}
                      </span>
                      <Pen
                        height={30}
                        width={30}
                        className="cursor-pointer h-[30px] w-[30px] p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                        onClick={() =>
                          setEdit((prevEdit) => ({
                            ...prevEdit,
                            about: true
                          }))
                        }
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <h2 className="text-lg dark:text-slate-200 text-slate-900">
                    Username
                  </h2>
                  {edit.username ? (
                    <div className="flex w-full group dark:focus-within:bg-slate-950 focus-within:bg-slate-200 placeholder:text-slate-500 text-slate-900 dark:text-slate-100 focus-within:border-b-green-400 rounded px-1 border-b-[2px] border-[1px] justify-center items-center gap-1">
                      <input
                        type="text"
                        placeholder="change about"
                        className="bg-transparent resize-none text-sm group w-full"
                        autoFocus={true}
                        value={changeName.username}
                        onChange={(e) => {
                          setChangeName((prevUsername) => ({
                            ...prevUsername,
                            username: e.target.value
                          }));
                        }}
                      />
                      <div className="flex items-center justify-center gap-1">
                        <Check
                          className="cursor-pointer text-green-500 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                          height={30}
                          width={30}
                          onClick={() => {
                            try {
                              user.update({
                                username: changeName.username
                              });
                              toast.success("username updated.");
                              setEdit((prevEdit) => ({
                                ...prevEdit,
                                username: false
                              }));
                            } catch (error) {
                              toast.error(`Error updating name: ${error}`);
                            }
                          }}
                        />
                        <X
                          className="cursor-pointer text-red-500 p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                          height={30}
                          width={30}
                          onClick={() => {
                            setEdit((prevEdit) => ({
                              ...prevEdit,
                              username: false
                            }));
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full justify-between items-center gap-2">
                      <span className="text-sm dark:text-slate-300 text-slate-600">
                        {user.username}
                      </span>
                      <Pen
                        height={30}
                        width={30}
                        className="cursor-pointer h-[30px] w-[30px] p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                        onClick={() =>
                          setEdit((prevEdit) => ({
                            ...prevEdit,
                            username: true
                          }))
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
              <Dialog>
                <DialogTrigger className="whitespace-nowrap w-fit p-2 rounded-[10px] border-[2px] dark:text-slate-300 border-red-600 text-slate-600">
                  Logout
                </DialogTrigger>
                <DialogContent className="border-none dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-50 py-3 px-5">
                  <DialogTitle hidden>Logout confirmation</DialogTitle>
                  <DialogHeader className="text-3xl font-bold">
                    Logout confirmation
                  </DialogHeader>
                    Are you sure you want to logout ?
                  <DialogFooter className="w-full flex justify-center items-center gap-3">
                    <DialogClose className="whitespace-nowrap w-full p-2 rounded-[10px] border-[2px] border-slate-500 dark:bg-slate-700 bg-slate-300">
                      cancel
                    </DialogClose>
                    <SignOutButton>
                      <button
                        onClick={() => {
                          if (!loggedOut) {
                            toast.success("Logout successful...", {
                              position: "top-right"
                            });
                          } else {
                            toast.error("Unable to logout!");
                          }
                        }}
                        className="whitespace-nowrap w-full p-2 rounded-[10px] border-[2px] border-red-500 text-white bg-red-600"
                      >
                        Logout
                      </button>
                    </SignOutButton>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
