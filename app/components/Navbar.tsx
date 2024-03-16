import Link from "next/link";
import { Home, UserRound, Atom } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5 border-4 rounded bg-green-200">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href="/">
              <div className="h-[2.2rem] w-[2.2rem] bg-white dark:bg-black hover:bg-gray-200 rounded p-[.6rem]">
                <TooltipContent>Home</TooltipContent>
                <Home className="h-[1rem] w-[1rem] dark:bg-black rounded" />
              </div>
            </Link>
          </TooltipTrigger>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href="/about">
              <div className="h-[2.2rem] w-[2.2rem] bg-white dark:bg-black hover:bg-gray-200 rounded p-[.6rem]">
                <TooltipContent>About Me</TooltipContent>
                <UserRound className="h-[1rem] w-[1rem] dark:bg-black rounded" />
              </div>
            </Link>
          </TooltipTrigger>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href="/about">
              <div className="h-[2.2rem] w-[2.2rem] bg-white dark:bg-black hover:bg-gray-200 rounded p-[.6rem]">
                <TooltipContent>Links</TooltipContent>
                <Atom className="h-[1rem] w-[1rem] dark:bg-black rounded" />
              </div>
            </Link>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
      <ModeToggle />
    </nav>
  );
}
