'use client'
import {redirect, useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {SignInButton, SignUpButton} from "@clerk/nextjs";
import Footer from "@/app/lib/Footer";
import { useUser } from "@clerk/nextjs";
function Home() {

    const {isSignedIn} = useUser();

      if(isSignedIn) {
          redirect("/All")
      }

    return (
        <div className={'container'} >
            <div className={'flex justify-between p-5'}>
                {/*<div className={'bg-orange-500 rounded-md px-5 py-2'}>*/}
                    <SignInButton>
                        <Link href={"/sign-in"}>Login</Link>
                    </SignInButton>
                {/*</div>*/}
                <SignUpButton>
                    <Link href={"/sign-up"}>
                        Register
                    </Link>
                </SignUpButton>


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


