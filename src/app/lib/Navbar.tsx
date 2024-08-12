'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoSearch } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {SignOutButton, UserButton} from "@clerk/nextjs";
import {BiCart} from "react-icons/bi";
import MobileView from "@/components/MobileView";


export default function Navbar() {
    let pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={'p-5'}>
            <nav className={'flex justify-between px-4'}>
                <MobileView/>
                <div className={'flex md:space-x-4 '}>
                    <Link href={'/'}>
                        <div className={'font-bold hidden md:flex'}>ACME</div>
                    </Link>



                    <Link href="/All">
                        <div className={`hidden md:flex ${pathname === '/All' ? 'active text-purple-900 ' : ''}`}>All</div>
                    </Link>

                    <Link href="/apparel">
                        <div
                            className={`${pathname === '/apparel' ? 'active text-purple-900' : ''} hidden md:flex`}>Apparel
                        </div>
                    </Link>

                    <Link href="/accessories">
                        <div
                            className={`hidden md:flex ${pathname === '/accessories' ? 'active text-purple-900' : ''} `}>Accessories
                        </div>
                    </Link>


                </div>

                <div className={'flex space-x-5 items-center'}>
                    <div className={'flex flex-grow-0  items-center mx-auto '}>
                        <input className={'rounded-md outline-none px-5'} type={'search'}
                               placeholder={'Search...'}/>
                        <IoSearch className={'size-5 hover:text-blue-600'}/>
                    </div>

                    <div>
                        <UserButton/>
                    </div>

                    <div><BiCart className={'size-8'}/></div>

                    <div className={'hidden px-4 md:flex font-medium bg-red-700 rounded-md'}>
                        <SignOutButton/>
                    </div>

                </div>

            </nav>
        </div>
    )
}
