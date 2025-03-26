'use client'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from "react";

export function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleClick() {
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
        }
    }
    return (
        <div className='flex justify-between items-center w-full h-full max-h-9 border border-gray-200 py-6 border-b-1 border-t-0 border-l-0 border-r-0'>
            <div className="px-3 font-bold text-2xl flex justify-center items-center">&#129520; My KungFu</div>
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <MenuIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuItem>
                        <Link href="/blogs" className="font-bold w-full" onClick={() => handleClick()}>Blogs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/about" className="font-bold w-full" onClick={() => handleClick()}>About Me</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/contact" className="font-bold w-full" onClick={() => handleClick()}>Tech Stacks</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}