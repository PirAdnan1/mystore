import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// components
import AddtoCart from "./AddtoCart";

// assest
import TireImage from "@/assets/TireFour.png";
import TireOne from "@/assets/TireOne.png";
import TireTwo from "@/assets/TireTwo.png";
import TireThree from "@/assets/TireThree.png";
import TireOnes from "@/assets/TireOne.png";
import ProductInfo from "./ProductInfo";

function ProductHeader({ products }) {
  const [item, setItem] = useState(false);
  const [count, setCount] = useState(1);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };
  const toggleMenu = () => setItem(!item);

  return (
    <div>
      <div className="flex items-center mt-12 ml-24">
        <span className="mr-4 text-[#9F9F9F]">Home</span>
        <span className="mr-6 text-lg font-bold">{">"}</span>
        <span className="mr-5 text-[#9F9F9F]">Shop</span>
        <span className="mr-6 text-lg font-bold">{">"}</span>
        <div className="w-0.5 h-6 bg-black mr-9"></div>
        <span>Tire</span>
      </div>

      <div className="flex flex-col lg:flex-row items-start mt-16 md:ml-24 px-3 md:space-x-24">
        <div className="flex items-center shrink-0 space-x-7">
          <div className="space-y-8">
            <Image
              alt="product"
              className="bg-[#e6e6e6] flex justify-center items-center rounded-lg"
              src={products.image}
              width={86}
              height={86}
            />
            <Image
              className="bg-[#e6e6e6] flex justify-center items-center rounded-lg"
              src={products.image}
              width={86}
              height={86}
              alt="product"
            />
            <Image
              className="bg-[#e6e6e6] flex justify-center items-center rounded-lg"
              src={products.image}
              width={86}
              height={86}
              alt="product"
            />
            <Image
              className="bg-specialOne flex justify-center items-center rounded-lg"
              src={products.image}
              width={86}
              height={86}
              alt="product"
            />
          </div>
          <div className="flex items-center justify-center w-full max-w-[423px] max-h-[500px] h-full">
            <Image
              className="object-cover"
              src={products.image}
              width={280}
              height={280}
              alt="mainimg"
            />
          </div>
        </div>

        <div>
          <h1 className="text-[42px] font-normal">{products.title}</h1>
          <p className="text-[#9F9F9F] text-2xl">{products.price}</p>
          <div className="flex items-center mt-4">
            <span className="text-black">Shope: {products.category}</span>
            <div className="w-0.5 h-6 bg-[#9F9F9F] mr-3 ml-2" />
            <span className="text-[#9F9F9F] text-xs">
              Rating : {products.rating.rate}{" "}
            </span>
          </div>
          <p className="text-[13px] max-w-[424px] mt-3">
            {products.description}
          </p>
          <span className="my-3 text-[#9F9F9F]">Size</span>
          <div className="flex items-center space-x-4">
            <span className="bg-[#FBEBB5] py-1.5 px-3 rounded-lg flex items-center justify-center">
              17
            </span>
            <span className="bg-[#FAF4F4] py-1.5 px-3 rounded-lg flex items-center justify-center">
              21
            </span>
            <span className="bg-[#FAF4F4] py-1.5 px-3 rounded-lg flex items-center justify-center">
              24
            </span>
          </div>
          <p className="mt-5 text-[#9F9F9F]">Color</p>

          <div className="bg-black w-7 h-7 mt-3 rounded-full" />

          <div className="mt-8 flex items-center space-x-16">
            <p className="border-2 shrink-0 px-2 text-base max-w-[123px] rounded-lg py-3 border-[#9F9F9F] flex justify-center items-center">
              <span className="mr-9 cursor-pointer" onClick={Decrease}>
                -
              </span>
              {count}
              <span className="ml-9 cursor-pointer" onClick={Increase}>
                +
              </span>
            </p>
            <Link href="#" className="text-xl" onClick={toggleMenu}>
              Add to Cart
            </Link>
          </div>
          <hr className="bg-[#D9D9D9] py-[1px] mt-14" />
          <ProductInfo products={products} />
        </div>
      </div>
      <hr className="bg-[#D9D9D9] w-full py-[1px] mt-10 mx-auto" />
      <div>
        <AddtoCart
          count={count}
          products={products}
          show={item}
          toggleMenu={toggleMenu}
        />
      </div>
    </div>
  );
}

export default ProductHeader;
