import { Mic, Paperclip, SendHorizontal, Smile } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (inputValue.trim()) {
        console.log("Message sent:", inputValue);
        setInputValue("");
      }
    }
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log("Message sent:", inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="flex text-slate-800 dark:text-slate-100 items-end border-t-2 p-1 gap-1 w-full z-10">
      <Popover>
        <PopoverTrigger className="p-0 m-0">
          <Smile
            aria-label="Open emoji picker"
            height={40}
            width={40}
            className="p-2 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-md cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="ml-60">Emojis</PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <Paperclip
            aria-label="Attach file"
            height={40}
            width={40}
            className="p-2 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-md cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="ml-60">Files</PopoverContent>
      </Popover>

      <textarea
        autoFocus={true}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = `${Math.min(target.scrollHeight, 140)}px`;
        }}
        className="resize-none dark:hover:bg-slate-700 hover:bg-slate-300 overflow-auto dark:focus-visible:bg-slate-800 focus-visible:bg-[#edf6ff] border-0 bg-transparent outline-none w-full text-xl p-2 dark:caret-green-600 caret-green-400"
        placeholder="Type your message..."
      />
      {inputValue.trim() ? (
        <SendHorizontal
          aria-label="Send message"
          height={45}
          width={45}
          className="p-2 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-md cursor-pointer"
          onClick={handleSend}
        />
      ) : (
        <Mic
          aria-label="Use microphone"
          height={45}
          width={45}
          className="p-2 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-md cursor-pointer"
        />
      )}
    </div>
  );
};

export default MessageInput;
