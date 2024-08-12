'use client'


import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";


export default function Navbar() {
    let pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={'p-5'}>
            <nav className={'flex justify-between px-4'}>

                <div className={'flex md:space-x-4 '}>
                    <Link href={'/'}>
                        <div className={'font-bold hidden md:flex'}>ACME</div>
                        <div>
                            {isOpen ?
                               ( <AiOutlineClose onClick={()=>setIsOpen(false)}  /> ):
                                <IoReorderThree
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={'md:hidden size-8 text-pink-500'}/> }
                           </div>

                    </Link>
                    {/*{isOpen && (*/}
                    {/*    <div className={'bg-blue-800 z-50'}>*/}
                    {/*        <div>ACME </div>*/}
                    {/*      */}
                    {/*    </div>*/}
                    {/*)}*/}



                    <Link href="/All">
                    <div className={`hidden md:flex ${pathname === '/All' ? 'active text-white ' : ''}`}>All</div>
                    </Link>

                    <Link href="/apparel">
                        <div className={`${pathname === '/apparel' ? 'active text-white' : ''} hidden md:flex`}>Apparel</div>
                    </Link>

                    <Link href="/accessories">
                        <div className={`hidden md:flex ${pathname === '/accessories' ? 'active text-white' : ''} `}>Accessories</div>
                    </Link>


                </div>




                <div className={'flex space-x-5'}>

                    <div className={'flex flex-grow-0  items-center mx-auto '}>
                        <input className={'rounded-md outline-none px-5'} type={'search'} placeholder={'Search...'}/>
                        <IoSearch className={'size-5 hover:text-blue-600'}/>

                    </div>

                    <div><FaUser className={'hidden md:flex size-5 hover:text-green-600'}/></div>
                    {/*<div><BsCartFill className={'size-6 hover:text-green-600 '}/></div>*/}


                </div>

            </nav>
        </div>
    )
}
