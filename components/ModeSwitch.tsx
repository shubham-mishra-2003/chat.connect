import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { useTheme } from "next-themes";

const ModeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  const handleThemeChange = (currentValue: string) => {
    if (currentValue === "system") {
      setTheme("system");
      localStorage.removeItem("theme");
    } else {
      setTheme(currentValue);
      localStorage.setItem("theme", currentValue);
    }
    setOpen(false);
  };

  const modes = [
    { value: "system", label: "System" },
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" }
  ];

  if (!mounted) return "Loading...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={`font-bold flex p-3 rounded-xl w-60 items-center justify-between ${
            resolvedTheme == "dark"
              ? "bg-slate-700 text-slate-200"
              : "bg-slate-200 text-slate-900"
          }`}
        >
          {modes.find((mode) => mode.value === theme)?.label}
          <ChevronsUpDown height={18} width={18} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={`p-1 rounded-xl w-60 ${
          resolvedTheme == "dark"
            ? "bg-slate-700 text-slate-200"
            : "bg-slate-200 text-slate-900"
        }`}
      >
        <Command>
          <CommandList>
            <CommandGroup>
              {modes.map((mode) => (
                <CommandItem
                  key={mode.value}
                  value={mode.value}
                  onSelect={() => handleThemeChange(mode.value)}
                  className={`${
                    resolvedTheme === "dark"
                      ? "hover:shadow-black"
                      : "hover:shadow-slate-400"
                  } hover:shadow-inner rounded-[10px] font-semibold cursor-pointer gap-2 flex w-full text-sm`}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      theme === mode.value ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {mode.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ModeSwitch;
