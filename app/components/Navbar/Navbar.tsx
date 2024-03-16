import Link from "next/link";
import { Home, UserRound, Atom } from "lucide-react";
import { ModeToggle } from "@/components/Navbar/ModeToggle";
import NavButton from "@/components/Navbar/NavButton";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 pt-5 pb-3 border-4 rounded bg-green-200">
      <NavButton
        icon={<Home />}
        linkUrl="/"
        buttonLabel="Home"
      />
      <NavButton
        icon={<UserRound />}
        linkUrl="/about"
        buttonLabel="Jacques"
      />
      <NavButton
        icon={<Atom />}
        linkUrl="/blog"
        buttonLabel="Blog"
      />
      <ModeToggle />
    </nav>
  );
}
