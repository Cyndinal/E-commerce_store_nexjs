'use client'
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Footer from "@/app/lib/Footer";

function Home() {
    const router = useRouter()


    return (
        <div className={'container'} >
            <div className={'flex justify-between p-5'}>
                <div className={'bg-orange-500 rounded-md px-5 py-2'}><Link href={"/login"}>Login</Link></div>
                <div className={'bg-orange-500 rounded-md px-5 py-2'}><Link href={"/register"}>Register</Link></div>
            </div>


            <div className={'grid grid-cols-2 gap-3'}>
                <div className={'h-full'}>
                    <Image src={'/dashboard-images/img4.jpg'} alt={'imag'}
                           width={700} height={100} priority={true}
                    />
               <br/>
                    <Image src={'/dashboard-images/img1.png'} alt={'imag'}
                           width={400} height={100} priority={true}
                    />

                </div>

                <div>

                    <Image className={'rotate-12'} src={'/dashboard-images/img2.png'} alt={'imag'} width={500} height={100} priority={true}/>
                    <span className={'hidden md:grid italic md:text-white text-5xl text-blue-800 font-bold'}>
                     PROGRESSIVE</span>
                    <br/>

                    <div >
                        <Image className={'-rotate-12'} src={'/dashboard-images/img3.png'} alt={'imag'} width={500} height={50}/>
                    </div>

                </div>
            </div>




         <Footer/>
        </div>
    )

}


export default Home


