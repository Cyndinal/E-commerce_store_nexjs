'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {IoReorderThree} from "react-icons/io5";
import Link from "next/link";

const  MobileView = () =>{
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div >
                    <IoReorderThree className={' flex items-center md:hidden size-8 hover:text-blue-600'}/>
                </div>

            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Go-Shopping</SheetTitle>
                    <SheetDescription>
                      I know you love shopping
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 font-bold gap-y-5">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Link href={"/All"}>All</Link>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                       <Link href={"/apparel"}>Apparel</Link>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Link href={"/accessories"}>Accessories</Link>
                    </div>
                </div>
             
            </SheetContent>
        </Sheet>
    )
}


export default MobileView