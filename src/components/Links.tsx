import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const tabs = [
  "Home",
  "World",
  "Business",
  "Technology",
  "Science",
  "Sports",
  "Health",
  "Entertainment",
];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  customID?: string;
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative rounded-md px-2 py-2 text-sm font-medium transition-colors duration-300 focus-within:outline-red-500/50 sm:text-base md:text-lg",
        selected
          ? "text-red-500"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100",
      )}
    >
      <Link
        className="relative z-10"
        to={text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`}
      >
        {text}
      </Link>
      {selected && (
        <motion.div
          className="absolute bottom-0 left-0 flex w-full justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="h-[3px] w-[60%] rounded-t-full bg-red-500"></span>
        </motion.div>
      )}
    </button>
  );
};

interface LineTabProps {
  center?: boolean;
  customID?: string;
}

const LineTabs = ({ center, customID }: LineTabProps) => {
  const [selected, setSelected] = useState<string>(tabs[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (tab: string) => {
    setSelected(tab);
    setIsOpen(false);
  };

  return (
    <nav className="w-full">
      <div className="hidden sm:block">
        <div
          className={cn(
            "mb-8 flex items-center gap-2 py-2 md:gap-3",
            center ? "justify-center" : "justify-start",
          )}
        >
          {tabs.map((tab) => (
            <Tab
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
              customID={customID}
            />
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span>{selected}</span>
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Choose a category</SheetDescription>
            <nav className="mt-4 flex flex-col space-y-4">
              {tabs.map((tab) => (
                <Link
                  key={tab}
                  to={
                    tab.toLowerCase() === "home" ? "/" : `/${tab.toLowerCase()}`
                  }
                  className={cn(
                    "text-lg font-medium",
                    selected === tab
                      ? "text-red-500"
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100",
                  )}
                  onClick={() => handleLinkClick(tab)}
                >
                  {tab}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default LineTabs;
