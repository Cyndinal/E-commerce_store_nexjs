import React from 'react';

import { Button } from "@/components/ui/button"

function Page({params}:{params:{id:string}}) {
    return (
        <div className={'flex p-10 items-center justify-center '}>
            <div className={'md:grid md:grid-cols-2 md:space-x-40'}>

                <div className={'flex flex-col p-5 '}>
                    {params.id}
                </div>


                <div className={''}>
                    <p>Salesor Monospace T-Shirt</p>
                    <p>$120</p>
                    <p>Sizes</p>
                    <button className={'bg-red-600 mx-auto px-5 py-3 rounded-md font-bold text-white'}>Add to Cart</button>


                    <p>Sub description of item</p>
                </div>
            </div>


        </div>
    );
}

export default Page;