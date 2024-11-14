import { Mic, Paperclip, SendHorizontal, Smile } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const MessageInput = () => {
  const { resolvedTheme } = useTheme();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (inputValue.trim()) {
        console.log("Message sent:", inputValue);
        setInputValue("");
      }
    }
  };

  const handleSend = () => {
    console.log("Message sent :", inputValue.trim());
    setInputValue("");
  };

  //To be added
  const emojiInput = () => {};
  const fileInput = () => {};
  const micInput = () => {};

  return (
    <div
      className={`flex items-end border-t-2 p-1 gap-1 w-full ${
        resolvedTheme == "dark"
          ? "text-slate-300 border-slate-700"
          : "text-slate-900 border-slate-300"
      }`}
    >
      <Smile
        height={45}
        width={45}
        className={`h-full p-2 rounded-md cursor-pointer ${
          resolvedTheme == "dark"
            ? "hover:bg-slate-700"
            : "hover:bg-[#d9e1e9] hover:text-slate-800"
        }`}
        onClick={emojiInput}
      />
      <Paperclip
        height={45}
        width={45}
        className={`h-full p-2 rounded-md cursor-pointer ${
          resolvedTheme == "dark"
            ? "hover:bg-slate-700"
            : "hover:bg-[#d9e1e9] hover:text-slate-800"
        }`}
        onClick={fileInput}
      />
      <input
        autoFocus={true}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`bg-transparent outline-none border-none w-full h-full text-xl px-1 focus-visible:bg-transparent ${
          resolvedTheme == "dark"
            ? "caret-green-400 hover:bg-slate-700"
            : "hover:bg-[#d9e1e9] caret-green-600"
        }`}
        placeholder="Type your message..."
        style={{
          lineHeight: "1.5"
        }}
      />
      {inputValue.trim() ? (
        <SendHorizontal
          height={45}
          width={45}
          className={`h-full p-2 rounded-md cursor-pointer ${
            resolvedTheme == "dark"
              ? "hover:bg-slate-700"
              : "hover:bg-[#d9e1e9] hover:text-slate-800"
          }`}
          onClick={handleSend}
        />
      ) : (
        <Mic
          height={45}
          width={45}
          className={`h-full p-2 rounded-md cursor-pointer ${
            resolvedTheme == "dark"
              ? "hover:bg-slate-700"
              : "hover:bg-[#d9e1e9] hover:text-slate-800"
          }`}
          onClick={micInput}
        />
      )}
    </div>
  );
};

export default MessageInput;
