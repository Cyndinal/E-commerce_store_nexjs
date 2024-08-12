import React from 'react';
import Image from "next/image";

function CartProduct({item_name,item_category,image_url,price}: {item_name: string, item_category: string,image_url: string,price:string}) {
    return (

            <div>
                <div className="flex items-center justify-between">
                    <Image src={image_url} alt={"Image2"}
                           style={{objectFit: "contain"}}
                           width={300}
                           height={300}
                           priority={true}/>
                </div>
                <div>{item_name}</div>
                <div>{item_category}</div>
               <div>{price}</div>



            </div>
    );
}

export default CartProduct;