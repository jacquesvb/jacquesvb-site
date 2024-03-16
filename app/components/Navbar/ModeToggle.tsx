"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        {theme === "light" ? 
          (<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />) : 
          (<Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />)
        }
      </label>
      <div className="text-black text-center font-bold">Theme</div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 z-10"
      >
        <li onClick={handleClick} className="text-white">
          <button onClick={() => setTheme('light')}>Light Mode</button>
        </li>
        <li onClick={handleClick} className="text-white">
          <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </li>
      </ul>
    </div>
  )
}