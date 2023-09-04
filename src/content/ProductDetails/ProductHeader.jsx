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

function ProductHeader() {
  const [item, setItem] = useState(false);

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
              className="bg-[#e6e6e6] flex justify-center items-center rounded-lg"
              src={TireOne}
              width={86}
            />
            <Image
              className="bg-[#e6e6e6] flex justify-center items-center rounded-lg"
              src={TireTwo}
              width={86}
            />
            <Image
              className="bg-[#e6e6e6] flex justify-center items-center rounded-lg"
              src={TireThree}
              width={86}
            />
            <Image
              className="bg-specialOne flex justify-center items-center rounded-lg"
              src={TireOnes}
              width={86}
            />
          </div>
          <div className="bg-[#e6e6e6] flex items-center justify-center w-full max-w-[423px] max-h-[500px] h-full">
            <Image className="py-16" src={TireImage} width={280} />
          </div>
        </div>
        <div>
          <h1 className="text-[42px] font-normal">MIRAGE MR-AT172 285/65</h1>
          <p className="text-[#9F9F9F] text-2xl">Rs. 50,000.00</p>
          <div className="flex items-center mt-4">
            <span className="text-black">Shope: Tire House</span>
            <div className="w-0.5 h-6 bg-[#9F9F9F] mr-3 ml-2" />
            <span className="text-[#9F9F9F] text-xs">5 Customer Review</span>
          </div>
          <p className="text-[13px] max-w-[424px] mt-3">
            The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an advanced
            tread pattern and compound which offer a long tread life.It employs
            a variable pitch tread design. This variable pitch design
            significantly reduces noise and provides a quiet ride. Its optimized
            profile provides even wear and classic style.
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
              <span className="mr-9">-</span>1 <span className="ml-9">+</span>
            </p>
            <Link href="#" className="text-xl" onClick={toggleMenu}>
              Add to Cart
            </Link>
          </div>
          <hr className="bg-[#D9D9D9] py-[1px] mt-14" />
          <ProductInfo />
        </div>
      </div>
      <hr className="bg-[#D9D9D9] w-full py-[1px] mt-10 mx-auto" />
      <div>
        <AddtoCart show={item} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default ProductHeader;
