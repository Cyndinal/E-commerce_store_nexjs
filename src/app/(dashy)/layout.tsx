import {ReactNode} from "react";
import Navbar from "@/app/lib/Navbar";
export default function RootLayout({children}: {children: ReactNode}) {
    return(
        <div>
            <Navbar/>
            {children}

        </div>
    )
}