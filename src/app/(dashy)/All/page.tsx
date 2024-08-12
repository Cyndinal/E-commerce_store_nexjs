"use client";
import { useUser } from "@clerk/nextjs";
import {redirect} from "next/navigation";
import {useParams} from "next/navigation";
import {router} from "next/client";
import Link from "next/link";
import CartProduct from "@/components/CartProduct";
export default function Page() {
    const {id} = useParams();
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return <div className={'font-bold p-5'}>
        Welcome, {user.firstName}

        <div className={'pt-4 flex flex-col gap-3 items-center md:container md:grid md:grid-cols-3 '}>
        <CartProduct image_url={'/dashboard-images/img6.jpg'}  item_category={'Accessories'} item_name={'Gift Card'} price={'$120'}/>
        <CartProduct image_url={'/dashboard-images/img7.jpg'}  item_category={'Shoes'} item_name={'Dior Shoe'} price={'$120'}/>
        <CartProduct image_url={'/dashboard-images/img8.jpg'}  item_category={'Shoes'} item_name={'Dior Shoe'} price={'$156'}/>
        {/*<CartProduct image_url={'/dashboard-images/img10.jpg'}  item_category={'Shoes'} item_name={'Dior Shoe'} price={'$156'}/>*/}


        </div>
    </div>;
}