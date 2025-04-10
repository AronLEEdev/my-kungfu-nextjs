"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "./ui/navigationMenu";
import { Contact } from "./Contact";
import { motion } from "motion/react";

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  function handleClick() {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }

  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-full max-h-9 border border-gray-200 py-6 border-b-1 border-t-0 border-l-0 border-r-0">
      <div className="px-3 font-bold text-2xl flex justify-center items-center">
        &#129520;{" "}
        <a href="/" className="ml-1">
          My KungFu
        </a>
      </div>
      <div className="hidden sm:flex sm:gap-2 flex-1 justify-end mr-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="mx-2">
              <Link
                href="/blogs"
                className="font-bold w-full"
                onClick={() => handleClick()}
              >
                &#128218; 博客
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
              <Link
                href="/stacks"
                className="font-bold w-full"
                onClick={() => handleClick()}
              >
                &#128209; 常用链接
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem
              className="mx-2"
              onClick={() => setShowContact(true)}
            >
              <motion.div layout>
                {showContact && <Contact />}
                {!showContact && (
                  <span className="font-bold">&#128222; 联系我</span>
                )}
              </motion.div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="block sm:hidden">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            <DropdownMenuItem>
              <Link
                href="/blogs"
                className="font-bold w-full"
                onClick={() => handleClick()}
              >
                &#128218; 博客
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/stacks"
                className="font-bold w-full"
                onClick={() => handleClick()}
              >
                &#128209; 常用链接
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
