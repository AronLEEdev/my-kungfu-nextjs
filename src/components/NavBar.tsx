'use client'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
export function NavBar() {
    return (
        <div className='flex justify-between items-center w-full h-full max-h-9 border border-gray-200 py-6 border-b-1 border-t-0 border-l-0 border-r-0'>
            <div className="px-3 font-bold text-2xl">My KungFu</div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <MenuIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuItem>
                        <Link href="/blogs" className="font-bold">Blogs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/about" className="font-bold">About Me</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/contact" className="font-bold">Tech Stacks</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}