import React from 'react';
import Image from './Image';
import Heading from './Heading';
import { FiShoppingCart } from "react-icons/fi";

const Product = ({productImg,productTitle,productPrice}) => {
  return (
    <>
      <div className="shadow-2xl px-5 py-8 rounded-[24px]">
         <div className="">
            <Image imgSrc={productImg} className={""}/>
         </div>
         <Heading text={productTitle} tagName={"h4"} className={"text-[22px] font-medium"}/>
         <div className="flex items-center">
            <Heading text={"price:"} tagName={"h4"} className={"text-[12px] font-medium"}/>
         <span>{productPrice}</span>
          
         </div>
         <div className="flex items-center">
           <Heading text={"Add to Cart"} tagName={"h4"} className={"text-[18px] font-medium"}/>
           <FiShoppingCart/>
          </div>
      </div>
    </>
  )
}

export default Product
